import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Snowflake, Lightbulb, Wind, Flame, Laptop, Car, Zap } from "lucide-react";

const appliances = [
  {
    icon: Snowflake,
    name: "AC",
    note: "Beban terbesar di rumah tropis",
  },
  {
    icon: Lightbulb,
    name: "Kulkas",
    note: "Menyala 24 jam setiap hari",
  },
  {
    icon: Wind,
    name: "Pompa Air",
    note: "Otomatis menyala berkala",
  },
  {
    icon: Flame,
    name: "Water Heater",
    note: "Beban tinggi saat dipakai",
  },
  {
    icon: Laptop,
    name: "Home Office",
    note: "Laptop, monitor, jaringan",
  },
  {
    icon: Car,
    name: "Kendaraan Listrik",
    note: "Kebutuhan pengisian daya tinggi",
  },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container-brand">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left — copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pola Konsumsi Energi"
              title="Berapa Banyak Energi yang Digunakan Rumah Anda Setiap Hari?"
              description="Kebutuhan listrik rumah modern terus bertambah. AC yang menyala seharian, kulkas yang tidak pernah dimatikan, pompa air, water heater, hingga perangkat home office dan kendaraan listrik — semuanya menyumbang pada tagihan bulanan."
            />

            <Reveal delay={120} className="mt-6">
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                Banyak pemilik rumah baru menyadari pola konsumsi listrik mereka
                setelah melihat tagihan terus naik. Kenali beban utama di rumah
                Anda — itu adalah langkah awal sebelum mempertimbangkan energi
                surya sebagai solusi jangka panjang.
              </p>
            </Reveal>

            <Reveal delay={220} className="mt-8">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {appliances.map((a) => (
                  <li
                    key={a.name}
                    className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-soft"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary/12">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        {a.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{a.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300} className="mt-8">
              <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/8 p-4">
                <Zap className="h-5 w-5 shrink-0 text-brand-gold-700" />
                <p className="text-sm leading-relaxed text-foreground/85">
                  Tagihan listrik yang naik perlahan bisa menjadi sinyal bahwa
                  rumah Anda layak dipertimbangkan untuk energi surya.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — image */}
          <Reveal direction="left" delay={180} className="relative">
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-card ring-1 ring-primary/10">
              { }
              <img
                src="/images/home-appliances.png"
                alt="Interior rumah modern dengan berbagai peralatan listrik"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            {/* Floating tagihan hint */}
            <div className="absolute -bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:w-72">
              <div className="rounded-2xl border border-border bg-white p-4 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Estimasi beban harian
                  </span>
                  <span className="rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    Indikatif
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                  8–25 kWh
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Kisaran konsumsi rumah modern di Indonesia, tergantung
                  jumlah AC dan perangkat elektronik.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
