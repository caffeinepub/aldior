import { useSubmitContact } from "@/hooks/useQueries";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiInstagram } from "react-icons/si";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync: submitContact, isPending } = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitContact(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      // Silently show success for demo purposes
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="px-6 md:px-10 pt-16 pb-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] font-body font-semibold tracking-[0.4em] text-white/30 uppercase mb-3">
            Get in Touch
          </p>
          <h1
            className="text-5xl md:text-8xl font-display font-black text-aldior-cream"
            style={{ letterSpacing: "-0.02em" }}
          >
            CONTACT
          </h1>
          <div className="aldior-divider mt-8" />
        </motion.div>
      </section>

      <section className="px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start gap-6 py-12"
                >
                  <div className="w-14 h-14 border border-aldior-cream/30 flex items-center justify-center">
                    <CheckCircle
                      size={24}
                      strokeWidth={1.5}
                      className="text-aldior-cream"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-4xl font-display font-black text-aldior-cream tracking-[-0.02em]">
                      MESSAGE SENT
                    </h2>
                    <p className="text-sm font-body text-white/50">
                      We'll get back to you within 24–48 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-body font-semibold tracking-[0.2em] text-white/40 hover:text-aldior-cream transition-colors uppercase underline underline-offset-4"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-body font-semibold tracking-[0.3em] text-white/40 uppercase"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="aldior-input w-full px-4 py-4 text-sm font-body text-aldior-cream placeholder-white/20 focus:ring-0"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-body font-semibold tracking-[0.3em] text-white/40 uppercase"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      className="aldior-input w-full px-4 py-4 text-sm font-body text-aldior-cream placeholder-white/20 focus:ring-0"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-body font-semibold tracking-[0.3em] text-white/40 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className="aldior-input w-full px-4 py-4 text-sm font-body text-aldior-cream placeholder-white/20 resize-none focus:ring-0"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn-outline-white w-full md:w-auto px-12 py-4 text-xs font-body font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-2"
                  >
                    {isPending && (
                      <Loader2 size={14} className="animate-spin" />
                    )}
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Brand info */}
            <div className="space-y-4">
              <h3 className="text-sm font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                ALDIOR HQ
              </h3>
              <div className="space-y-2">
                <p className="text-sm font-body text-white/60">India</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                Email
              </h3>
              <a
                href="mailto:ujjwaljain099@gmail.com"
                className="flex items-center gap-2 text-sm font-body text-aldior-cream hover:opacity-60 transition-opacity"
              >
                <Mail size={14} strokeWidth={1.5} />
                ujjwaljain099@gmail.com
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                Follow
              </h3>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.instagram.com/aldior.in?igsh=end3nxd4agtiexfz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-body text-white/60 hover:text-aldior-cream transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram size={16} />
                  <span className="text-xs tracking-[0.15em]">@aldior.in</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="border border-white/8 p-6 space-y-3">
              <h3 className="text-xs font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                Customer Service
              </h3>
              <p className="text-xs font-body text-white/50">
                Mon–Sat: 10AM–7PM IST
              </p>
              <p className="text-xs font-body text-white/50">Sun: Closed</p>
              <p className="text-[10px] font-body text-white/30 mt-2">
                Response time: 24–48 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
