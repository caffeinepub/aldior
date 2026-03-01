import { Link } from "@tanstack/react-router";
import { SiInstagram, SiTiktok, SiX } from "react-icons/si";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "SHOP", to: "/shop" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2
              className="text-5xl md:text-7xl font-display font-black text-aldior-cream"
              style={{ letterSpacing: "0.12em" }}
            >
              ALDIOR
            </h2>
            <p className="text-white/40 text-xs tracking-[0.25em] font-body uppercase">
              Build Loud. Worn Loose.
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
                  className="text-sm font-body text-white/60 hover:text-aldior-cream transition-colors duration-200 tracking-[0.1em]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + Socials */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xs font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                Connect
              </h3>
              <p className="text-sm font-body text-white/60 tracking-wide">
                hello@aldior.com
              </p>
              <p className="text-xs font-body text-white/30 tracking-wide">
                Mon–Fri · 9AM–6PM EST
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-aldior-cream transition-colors duration-200"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-aldior-cream transition-colors duration-200"
                aria-label="X / Twitter"
              >
                <SiX size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-aldior-cream transition-colors duration-200"
                aria-label="TikTok"
              >
                <SiTiktok size={18} />
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
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body text-white/20 hover:text-white/40 transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
