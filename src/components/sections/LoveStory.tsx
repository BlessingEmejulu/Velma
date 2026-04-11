import { motion } from 'motion/react';

const milestones = [
  {
    year: "2021",
    title: "The First Meeting",
    description: "Our paths crossed in the most unexpected way. A simple conversation sparked a connection that would change our lives forever.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2023",
    title: "The Proposal",
    description: "Under a canopy of stars, a promise was made. A beautiful 'Yes' that marked the beginning of our forever.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2026",
    title: "The Wedding",
    description: "Today, we stand before our loved ones to unite our lives, honoring our heritage and our faith.",
    image: "https://images.unsplash.com/photo-1525257831700-183b9b8bf5c4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function LoveStory() {
  return (
    <section id="invitations" className="py-32 bg-off-white relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-olive-dark mb-4"
          >
            Our Love Story
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </div>

        <div className="relative space-y-32">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2 z-0" />

          {milestones.map((milestone, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 relative z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_8px_rgba(245,242,237,1)]" />

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-olive-dark/20 z-10 mix-blend-overlay" />
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full md:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
              >
                <span className="text-gold font-serif text-6xl md:text-8xl opacity-20 mb-[-2rem] block">
                  {milestone.year}
                </span>
                <h3 className="text-3xl text-olive-dark mb-6 relative z-10">
                  {milestone.title}
                </h3>
                <p className="text-ink/70 leading-relaxed text-lg">
                  {milestone.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
