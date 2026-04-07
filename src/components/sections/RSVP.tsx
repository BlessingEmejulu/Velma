import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-32 bg-olive-dark text-ivory relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-gold mb-4"
          >
            RSVP
          </motion.h2>
          <p className="text-ivory/70 text-lg">Kindly respond by September 1st, 2026</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm uppercase tracking-wider text-ivory/80">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm uppercase tracking-wider text-ivory/80">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm uppercase tracking-wider text-ivory/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-sm uppercase tracking-wider text-ivory/80">Will you be attending?</p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="attendance" value="yes" required className="accent-gold w-4 h-4" />
                      <span className="text-ivory">Joyfully Accepts</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="attendance" value="no" required className="accent-gold w-4 h-4" />
                      <span className="text-ivory">Regretfully Declines</span>
                    </label>
                  </div>
                </div>

                <div className="pt-8 text-center">
                  <button 
                    type="submit"
                    className="px-12 py-4 bg-gold text-olive-dark font-medium uppercase tracking-widest text-sm rounded-full hover:bg-gold-light transition-colors duration-300 w-full md:w-auto"
                  >
                    Send RSVP
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 text-gold">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl text-gold mb-4 font-serif">Thank You</h3>
                <p className="text-ivory/80 text-lg">Your response has been recorded. We look forward to celebrating with you!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
