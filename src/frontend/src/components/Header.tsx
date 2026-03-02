import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "SHOP", to: "/shop" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional - only run on pathname changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-black/95 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/uploads/642952176_18050180807503559_3939477048185680875_n-1.jpg"
              alt="ALDIOR Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-sm"
            />
            <span
              className="text-xl md:text-2xl font-display font-black tracking-[0.25em] text-aldior-cream"
              style={{ letterSpacing: "0.25em" }}
            >
              ALDIOR
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-xs font-body font-medium tracking-[0.2em] transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-aldior-cream"
                    : "text-white/60 hover:text-aldior-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 text-aldior-cream hover:opacity-70 transition-opacity"
              aria-label={`Open cart, ${totalItems} items`}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="cart-badge absolute -top-0.5 -right-0.5">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 text-aldior-cream hover:opacity-70 transition-opacity"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    className="text-3xl font-display font-black tracking-[0.2em] text-aldior-cream hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-white/30 text-xs tracking-[0.3em] font-body"
            >
              BUILD LOUD. WORN LOOSE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
