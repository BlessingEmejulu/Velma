import { motion } from 'motion/react';

const messages = [
  {
    name: "Aunt Sarah",
    text: "Wishing you both a lifetime of love and happiness. May your journey together be as beautiful as your wedding day.",
    delay: 0.1
  },
  {
    name: "The Johnsons",
    text: "So thrilled to celebrate this special day with you. Your love story is truly inspiring!",
    delay: 0.2
  },
  {
    name: "Michael & Emma",
    text: "Congratulations to the beautiful couple! May Jehovah bless your union abundantly.",
    delay: 0.3
  },
  {
    name: "Cousin David",
    text: "Can't wait to see you walk down the aisle. Wishing you endless joy and laughter.",
    delay: 0.4
  }
];

export default function MessageWall() {
  return (
    <section className="py-32 bg-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-olive-dark mb-4"
          >
            Guest Wishes
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: msg.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <p className="text-ink/80 italic mb-8 leading-relaxed">"{msg.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-olive-light/20 flex items-center justify-center text-olive-dark font-serif text-xl">
                  {msg.name.charAt(0)}
                </div>
                <span className="text-sm font-medium uppercase tracking-wider text-olive-dark">{msg.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-olive-dark text-olive-dark rounded-full hover:bg-olive-dark hover:text-ivory transition-colors duration-300 uppercase tracking-wider text-sm">
            Leave a Message
          </button>
        </div>
      </div>
    </section>
  );
}
