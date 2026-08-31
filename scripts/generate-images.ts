/**
 * Generates all images for the PLTS website in parallel.
 * Run: bun /home/z/my-project/scripts/generate-images.ts
 */
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT_DIR = "/home/z/my-project/public/images";
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

type Job = {
  filename: string;
  prompt: string;
  size: "1024x1024" | "1344x768" | "768x1344" | "1152x864";
};

const jobs: Job[] = [
  {
    filename: "hero-house.png",
    size: "1344x768",
    prompt:
      "Premium architectural photography of a modern two-story Indonesian tropical house with black monocrystalline solar panels neatly installed on a sloped tile roof, lush green garden with palm trees, warm golden-hour sunlight, blue sky with soft clouds, ultra realistic, high detail, editorial residential real estate photography, 35mm, shallow depth of field",
  },
  {
    filename: "home-appliances.png",
    size: "1152x864",
    prompt:
      "Cozy modern Indonesian living room interior showing multiple electrical appliances: split AC unit on wall, refrigerator in kitchen, water heater, water pump, laptop on desk, soft natural daylight from large windows, warm tones, lifestyle residential photography, ultra realistic, editorial quality",
  },
  {
    filename: "portfolio-1.png",
    size: "1024x1024",
    prompt:
      "Modern tropical residential house in Jakarta with black solar panels installed on sloped clay tile roof, clean white walls, wooden accents, daytime with clear sky, professional architectural exterior photography, ultra realistic, sharp detail",
  },
  {
    filename: "portfolio-2.png",
    size: "1024x1024",
    prompt:
      "Modern minimalist villa in Bali with large solar panel array on flat concrete roof, infinity pool reflecting sky, tropical garden, professional real estate photography, late afternoon light, ultra realistic, editorial quality",
  },
  {
    filename: "portfolio-3.png",
    size: "1024x1024",
    prompt:
      "Two-story contemporary Indonesian house with extensive rooftop solar panel installation, glass facade, metal gate, residential street, blue sky, professional architectural photography, ultra realistic, sharp focus",
  },
  {
    filename: "portfolio-4.png",
    size: "1024x1024",
    prompt:
      "Modern small business building in Bali with solar panels on flat concrete roof, cafe storefront with large windows, tropical plants, daytime, professional architectural photography, ultra realistic, editorial quality",
  },
  {
    filename: "portfolio-5.png",
    size: "1024x1024",
    prompt:
      "Indonesian suburban family house at dusk with solar panels visible on sloped roof, warm interior lights glowing from windows, blue hour sky, residential architectural photography, ultra realistic, cinematic mood",
  },
  {
    filename: "portfolio-6.png",
    size: "1024x1024",
    prompt:
      "Close-up architectural detail of black monocrystalline solar panels neatly aligned on a modern Indonesian residential tile roof, blue sky, professional installation quality, mounting rails visible, ultra realistic photography, sharp focus, editorial",
  },
  {
    filename: "inverter-install.png",
    size: "1152x864",
    prompt:
      "Clean wall-mounted solar inverter installation in a residential garage, neat cable management, modern hybrid inverter with monitoring screen, professional installation quality, soft daylight, ultra realistic photography, technical trust",
  },
];

async function generate(zai: Awaited<ReturnType<typeof ZAI.create>>, job: Job) {
  const outPath = path.join(OUT_DIR, job.filename);
  if (fs.existsSync(outPath)) {
    console.log(`SKIP (exists): ${job.filename}`);
    return { ...job, ok: true, cached: true };
  }
  try {
    const t0 = Date.now();
    const resp = await zai.images.generations.create({
      prompt: job.prompt,
      size: job.size,
    });
    const b64 = resp.data[0].base64;
    fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
    console.log(`OK   ${job.filename}  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
    return { ...job, ok: true };
  } catch (e) {
    console.error(`FAIL ${job.filename}:`, (e as Error).message);
    return { ...job, ok: false, error: (e as Error).message };
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log(`Generating ${jobs.length} images sequentially (with cooldown)...`);
  const zai = await ZAI.create();
  const results: Array<Awaited<ReturnType<typeof generate>>> = [];
  for (const j of jobs) {
    const r = await generate(zai, j);
    results.push(r);
    // cool down between requests to avoid 429
    if (!r.ok) await sleep(8000);
    else await sleep(2500);
  }
  const ok = results.filter((r) => r.ok).length;
  console.log(`Done: ${ok}/${jobs.length} succeeded`);
  if (ok < jobs.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
