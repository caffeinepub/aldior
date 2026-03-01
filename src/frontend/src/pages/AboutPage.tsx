import { motion } from "motion/react";

const values = [
  {
    label: "QUALITY",
    number: "01",
    description:
      "Every piece is constructed from premium materials, built to outlast trends. We source with intention and refuse to compromise on craftsmanship.",
  },
  {
    label: "IDENTITY",
    number: "02",
    description:
      "ALDIOR is not a costume. It is an extension of your character — a statement that doesn't need words. Dress for who you already are.",
  },
  {
    label: "MOVEMENT",
    number: "03",
    description:
      "Built for those in motion. Whether that's the city, the studio, or the street — ALDIOR moves with you, not against you.",
  },
];

export function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/assets/generated/hero-model.dim_1200x800.jpg"
          alt="ALDIOR"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="absolute bottom-12 left-6 md:left-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-body font-semibold tracking-[0.4em] text-white/40 uppercase mb-3">
              The Brand
            </p>
            <h1
              className="text-5xl md:text-8xl font-display font-black text-aldior-cream"
              style={{ letterSpacing: "-0.02em" }}
            >
              WHO WE ARE
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="px-6 md:px-10 py-20 md:py-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-aldior-cream mb-6 leading-tight tracking-[-0.02em]">
              BUILT FOR
              <br />
              THE INTENTIONAL.
            </h2>
            <div className="w-12 h-px bg-aldior-cream mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="text-sm md:text-base font-body text-white/70 leading-relaxed">
              ALDIOR was born from a simple belief: that the men who make the
              most noise in a room are rarely the loudest ones. They are dressed
              with purpose, moving with intention, and wearing their identity
              without apology.
            </p>
            <p className="text-sm md:text-base font-body text-white/70 leading-relaxed">
              We are a new men's clothing brand built for those who demand more
              from their wardrobe. More cut. More weight. More character. Each
              piece in our collection is designed to live at the intersection of
              raw aesthetics and refined construction.
            </p>
            <p className="text-sm md:text-base font-body text-white/70 leading-relaxed">
              "Build Loud. Worn Loose." is not just a tagline — it is a
              philosophy. A call to those who construct themselves boldly but
              carry it all effortlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-10 pb-20 md:pb-32 max-w-7xl mx-auto">
        <div className="aldior-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <p className="text-[10px] font-body font-semibold tracking-[0.4em] text-white/30 uppercase mb-3">
            What We Stand For
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-aldior-cream tracking-[-0.02em]">
            OUR VALUES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border border-white/8 p-8 hover:border-white/20 transition-colors duration-400"
            >
              <p className="text-4xl font-display font-black text-white/10 mb-4">
                {value.number}
              </p>
              <h3 className="text-xl font-display font-black text-aldior-cream tracking-[0.1em] mb-4">
                {value.label}
              </h3>
              <div className="w-8 h-px bg-white/20 mb-4 transition-all duration-300 group-hover:w-14 group-hover:bg-aldior-cream" />
              <p className="text-sm font-body text-white/50 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-[#050505] py-20 px-6 md:px-10 text-center">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-5xl font-display font-black text-aldior-cream leading-[1.1] tracking-[-0.02em]">
            "STYLE IS NOT WHAT YOU WEAR.
            <br />
            IT'S HOW CERTAIN YOU ARE."
          </p>
          <cite className="block mt-6 text-xs font-body font-semibold tracking-[0.4em] text-white/30 uppercase not-italic">
            — ALDIOR MANIFESTO
          </cite>
        </motion.blockquote>
      </section>
    </main>
  );
}
