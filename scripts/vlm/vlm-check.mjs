// /home/z/tmp-vlm/vlm-check.mjs
// VLM analysis script for PLTS solar website screenshots.
// Uses z-ai-web-dev-sdk's vision multimodal API.
//
// Usage:  bun /home/z/tmp-vlm/vlm-check.mjs <path-to-image.png>

import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function analyzeImage(imagePath) {
  if (!imagePath) {
    console.error('Usage: bun /home/z/tmp-vlm/vlm-check.mjs <path-to-image.png>');
    process.exit(1);
  }
  if (!fs.existsSync(imagePath)) {
    console.error(`Image not found: ${imagePath}`);
    process.exit(1);
  }

  const zai = await ZAI.create();
  const imageBuffer = fs.readFileSync(imagePath);
  const base64 = imageBuffer.toString('base64');

  const prompt = `Analyze this website screenshot for a residential solar panel (PLTS) business in Indonesia.
The expected visual design:
- Colors: Deep Green (#14532D) primary, Solar Yellow (#F4B41A) accent, Warm White (#FBF8F1) background, Dark Charcoal text
- Typography: Plus Jakarta Sans for headings, Inter for body
- Style: premium, residential, trustworthy, natural, rounded cards, subtle shadows

Please describe concisely:
(1) WHAT SECTIONS are visible (list each section you can identify).
(2) BRAND COLORS present and applied correctly? (yes/no with brief reason) — Look for deep green, solar yellow, warm white.
(3) LAYOUT ISSUES — broken images, text overflow, blank areas, alignment problems, contrast issues, missing assets, weird spacing.
(4) PREMIUM/RESIDENTIAL FEEL — does it look like a trustworthy premium residential solar brand? (yes/no + 1 sentence).

Keep the response under 250 words. Use clear section headers: SECTIONS, COLORS, ISSUES, VERDICT.`;

  const response = await zai.chat.completions.createVision({
    model: 'glm-4.5v',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          {
            type: 'image_url',
            image_url: { url: `data:image/png;base64,${base64}` },
          },
        ],
      },
    ],
  });

  const content =
    response?.choices?.[0]?.message?.content ??
    response?.choices?.[0]?.delta?.content ??
    JSON.stringify(response, null, 2);

  console.log(content);
}

const imagePath = process.argv[2];
await analyzeImage(imagePath);
