import { motion } from 'motion/react';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function EventDetails() {
  return (
    <section className="py-32 bg-olive-dark text-ivory relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-gold" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-gold" />
      </div>

      <div className="invitation max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-gold mb-4"
          >
            The Celebration
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-px bg-gold/50 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0 text-gold">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="text-2xl text-gold mb-2">When</h3>
                <p className="text-ivory/80 text-lg">Saturday, April 25th, 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0 text-gold">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-2xl text-gold mb-2">Time</h3>
                <p className="text-ivory/80 text-lg">12:00 PM Prompt</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0 text-gold">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-2xl text-gold mb-2">Where</h3>
                <p className="text-ivory/80 text-lg mb-2">Kingdom Hall of Jehovah's Witnesses</p>
                <p className="text-ivory/60">Grandmate Congregation</p>
                <p className="text-ivory/60">28/30 Ohafia Street, Off Ago Palace Way</p>
                <p className="text-ivory/60">Ago, Okota, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0 text-gold">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-2xl text-gold mb-2">Reception</h3>
                <p className="text-ivory/80 text-lg mb-2">At Blue Moon Hotel</p>
                <p className="text-ivory/60">49 Samuel Ekowola Ago Palace Way</p>
                <p className="text-ivory/60">Lagos, Nigeria</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-gold/30"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.084725354972!2d3.3150000000000004!3d6.510000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMzYuMCJOIDPCsDE4JzU0LjAiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Venue Map"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
