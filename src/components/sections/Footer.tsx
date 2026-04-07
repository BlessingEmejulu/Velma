import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-ivory py-20 border-t border-gold/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">
            Velma & Stephen
          </h2>
          
          <p className="text-ivory/60 font-serif italic text-xl max-w-2xl mx-auto leading-relaxed">
            "Let all that you do take place with love."
            <br />
            <span className="text-sm not-italic uppercase tracking-widest mt-4 block text-gold/80">
              — 1 Corinthians 16:14
            </span>
          </p>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ivory/40 uppercase tracking-wider">
            <p>© 2026 Velma & Stephen. All rights reserved.</p>
            <p>October 24, 2026 • Lagos, Nigeria</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
