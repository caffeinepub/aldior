import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "SHOP", to: "/shop" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Editorial brand statement */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
        <p
          className="font-display font-black text-aldior-cream leading-[1.0] tracking-[-0.02em]"
          style={{ fontSize: "clamp(1.8rem, 6vw, 5rem)" }}
        >
          DRESSED FOR THE ONES
          <br />
          WHO MOVE IN SILENCE
        </p>
      </div>

      {/* Thin divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border-t border-white/10" />
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/uploads/642952176_18050180807503559_3939477048185680875_n-1.jpg"
                alt="ALDIOR Logo"
                className="h-10 w-10 object-contain rounded-sm"
              />
              <h2
                className="text-3xl md:text-4xl font-display font-black text-aldior-cream"
                style={{ letterSpacing: "0.12em" }}
              >
                ALDIOR
              </h2>
            </div>
            <p className="text-white/40 text-xs tracking-[0.25em] font-body uppercase">
              Build Loud. Worn Loose.
            </p>
            <p className="text-white/25 text-xs tracking-[0.2em] font-body uppercase mt-2">
              India
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-body text-white/60 hover:text-aldior-cream transition-colors duration-200 tracking-[0.1em] w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                Connect
              </h3>
              <a
                href="mailto:ujjwaljain099@gmail.com"
                className="flex items-center gap-2 text-sm font-body text-white/60 hover:text-aldior-cream transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.5} />
                ujjwaljain099@gmail.com
              </a>
              <p className="text-xs font-body text-white/30 tracking-wide">
                Mon–Sat · 10AM–7PM IST
              </p>
            </div>

            {/* Social — Instagram only */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/aldior.in?igsh=end3nxd4agtiexfz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-aldior-cream transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
                <span className="text-xs font-body tracking-[0.15em] text-white/40 group-hover:text-aldior-cream transition-colors">
                  @aldior.in
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-white/25 tracking-[0.1em]">
            © {year} ALDIOR. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs font-body text-white/20 tracking-[0.1em] uppercase">
            India
          </p>
        </div>
      </div>
    </footer>
  );
}
