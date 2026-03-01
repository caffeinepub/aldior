import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// ─── MARQUEE STRIP ───────────────────────────────────────────────
function MarqueeStrip() {
  const text = "BUILD LOUD. WORN LOOSE — ALDIOR — NEW COLLECTION — SS26 — ";
  const repeated = text.repeat(6);
  return (
    <div className="overflow-hidden bg-aldior-cream py-3.5 select-none">
      <div className="marquee-track">
        <span className="whitespace-nowrap text-black text-xs font-body font-bold tracking-[0.25em] uppercase pr-0">
          {repeated}
        </span>
        <span className="whitespace-nowrap text-black text-xs font-body font-bold tracking-[0.25em] uppercase">
          {repeated}
        </span>
      </div>
    </div>
  );
}

// ─── FEATURED COLLECTION ─────────────────────────────────────────
const featuredItems = [
  {
    image: "/assets/generated/product-bomber.dim_600x700.jpg",
    name: "THE BOMBER",
    category: "OUTERWEAR",
    description: "Structured silhouette. Uncompromising presence.",
  },
  {
    image: "/assets/generated/product-hoodie.dim_600x700.jpg",
    name: "OVERSIZED HOODIE",
    category: "TOPS",
    description: "Worn loose, lived in.",
  },
  {
    image: "/assets/generated/product-trousers.dim_600x700.jpg",
    name: "CARGO TROUSERS",
    category: "BOTTOMS",
    description: "Built for movement. Styled for intention.",
  },
];

function FeaturedSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <p className="text-xs font-body font-semibold tracking-[0.3em] text-white/40 uppercase mb-3">
            SS26 Collection
          </p>
          <h2
            className="text-4xl md:text-6xl font-display font-black text-aldior-cream"
            style={{ letterSpacing: "-0.02em" }}
          >
            THE NEW
            <br />
            COLLECTION
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden md:flex items-center gap-2 text-xs font-body font-semibold tracking-[0.2em] text-white/50 hover:text-aldior-cream transition-colors uppercase"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {featuredItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.15,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="product-card group cursor-pointer"
          >
            <Link to="/shop">
              <div className="relative overflow-hidden aspect-[3/4] bg-aldior-mid">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <p className="text-xs font-body text-aldior-cream tracking-[0.15em]">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-[10px] font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                  {item.category}
                </p>
                <p className="text-base font-display font-black text-aldior-cream tracking-[0.05em]">
                  {item.name}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 md:hidden flex justify-center">
        <Link
          to="/shop"
          className="flex items-center gap-2 text-xs font-body font-semibold tracking-[0.2em] text-white/50 hover:text-aldior-cream transition-colors uppercase"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

// ─── BRAND STATEMENT ─────────────────────────────────────────────
function BrandStatement() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, oklch(0.96 0.008 80) 0px, transparent 1px, transparent 80px)",
          backgroundSize: "80px 1px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-body font-semibold tracking-[0.4em] text-white/30 uppercase mb-8"
        >
          The Aldior Ethos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-aldior-cream leading-[1.1] tracking-[-0.02em]"
        >
          "DRESSED FOR THE ONES
          <br />
          WHO MOVE IN SILENCE"
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-20 h-px bg-aldior-cream mx-auto mt-10"
        />
      </div>
    </section>
  );
}

// ─── CATEGORY GRID ────────────────────────────────────────────────
const categories = [
  {
    label: "TOPS",
    image: "/assets/generated/product-tee.dim_600x700.jpg",
    filter: "TOPS",
  },
  {
    label: "BOTTOMS",
    image: "/assets/generated/product-trousers.dim_600x700.jpg",
    filter: "BOTTOMS",
  },
  {
    label: "OUTERWEAR",
    image: "/assets/generated/product-bomber.dim_600x700.jpg",
    filter: "OUTERWEAR",
  },
  {
    label: "ACCESSORIES",
    image: "/assets/generated/product-hoodie.dim_600x700.jpg",
    filter: "ACCESSORIES",
  },
];

function CategoryGrid() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs font-body font-semibold tracking-[0.3em] text-white/40 uppercase mb-3">
          Browse by Category
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black text-aldior-cream tracking-[-0.02em]">
          SHOP NOW
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <Link to="/shop">
              <div className="category-tile relative overflow-hidden group cursor-pointer aspect-[3/4] md:aspect-[2/3]">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 z-[1]" />
                <div className="absolute inset-0 z-[2] flex items-end p-5">
                  <div>
                    <p className="text-base md:text-xl font-display font-black text-aldior-cream tracking-[0.1em]">
                      {cat.label}
                    </p>
                    <div className="w-6 h-px bg-aldior-cream mt-2 transition-all duration-300 group-hover:w-12" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const scrollToContent = () => {
    const el = document.getElementById("home-content");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="/assets/generated/hero-model.dim_1200x800.jpg"
          alt="ALDIOR Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Brand name with zoom animation */}
        <h1
          className="aldior-brand font-display font-black text-aldior-cream"
          style={{
            fontSize: "clamp(5rem, 20vw, 16rem)",
            lineHeight: 0.85,
            letterSpacing: "0.15em",
          }}
        >
          ALDIOR
        </h1>

        {/* Tagline */}
        <p className="aldior-tagline-reveal text-xs md:text-sm font-body font-semibold tracking-[0.5em] text-white/70 uppercase mt-6 md:mt-8">
          Build Loud. Worn Loose.
        </p>

        {/* CTA */}
        <div className="aldior-cta-reveal mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/shop"
            className="btn-outline-white px-10 py-4 text-xs font-body font-bold tracking-[0.3em] uppercase inline-block"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToContent}
        className="aldior-cta-reveal absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-body tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>
    </section>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────
export function HomePage() {
  return (
    <main>
      <Hero />

      <div id="home-content">
        <MarqueeStrip />
        <FeaturedSection />
        <BrandStatement />
        <CategoryGrid />
      </div>
    </main>
  );
}
