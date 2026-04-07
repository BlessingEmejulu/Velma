import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-olive-dark">
      {/* Background Image / Illustration */}
      <div className="absolute inset-0 z-0 opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop" 
          alt="Elegant wedding background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-dark/40 via-transparent to-olive-dark" />
      </div>

      {/* Floating Florals (Abstract shapes) */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/15 blur-[100px]"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-olive-light/25 blur-[120px]"
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-8 font-medium"
        >
          We joyfully invite you to our wedding
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl text-ivory font-light leading-none mb-8 tracking-tight"
        >
          Velma <span className="text-gold italic font-serif">&</span> Stephen
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-champagne/90 text-xl md:text-2xl font-serif italic tracking-wide">
            "Two souls, one beautiful journey."
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-4 bg-transparent border border-gold text-gold font-medium uppercase tracking-[0.2em] text-xs rounded-full hover:bg-gold hover:text-olive-dark transition-all duration-500"
            onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Invitation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
