import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Video, CalendarPlus } from 'lucide-react';

export default function LiveStream() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Oct 24, 2026 10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-off-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-[2rem] p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          
          <h2 className="text-4xl md:text-5xl text-olive-dark mb-6">Join the Ceremony Live</h2>
          <p className="text-ink/70 text-lg mb-12 max-w-2xl mx-auto">
            For our loved ones who cannot be with us in person, we would be honored to have you join us virtually to witness our union.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gold/30 flex items-center justify-center mb-3 bg-white shadow-sm">
                  <span className="text-3xl md:text-4xl text-olive-dark font-serif">{value}</span>
                </div>
                <span className="text-sm uppercase tracking-widest text-ink/60">{unit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://us06web.zoom.us/j/83533243988?pwd=FHuETbum7sQ07gCsbgsDdw7GC0G0uA.1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-olive-dark text-ivory rounded-full hover:bg-olive transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <Video size={20} />
              <span className="uppercase tracking-wider text-sm font-medium">Join Zoom Meeting</span>
            </a>
            
            <button className="flex items-center gap-3 px-8 py-4 border border-olive-dark text-olive-dark rounded-full hover:bg-olive-dark hover:text-ivory transition-colors duration-300 w-full sm:w-auto justify-center">
              <CalendarPlus size={20} />
              <span className="uppercase tracking-wider text-sm font-medium">Add to Calendar</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
