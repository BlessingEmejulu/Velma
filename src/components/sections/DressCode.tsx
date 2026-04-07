import { motion } from 'motion/react';

export default function DressCode() {
  const colors = [
    { name: "Olive Green", hex: "#4A5D23" },
    { name: "Moss Green", hex: "#6B7D43" },
    { name: "Sage", hex: "#9CAF88" },
    { name: "Gold", hex: "#D4AF37" },
    { name: "Champagne", hex: "#F7E7CE" }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl text-olive-dark mb-6">Dress Code</h2>
            <p className="text-ink/70 text-lg mb-8 leading-relaxed">
              We request our guests to dress in elegant formal attire. To help create a beautiful and cohesive atmosphere, we would love for you to incorporate shades of green, gold, or champagne into your outfit.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl text-olive-dark font-serif italic">Color Palette Inspiration</h3>
              <div className="flex flex-wrap gap-4">
                {colors.map((color, index) => (
                  <motion.div 
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div 
                      className="w-16 h-16 rounded-full shadow-md border border-black/5"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs uppercase tracking-wider text-ink/60">{color.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border-8 border-off-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1549416878-b9ca95e26903?q=80&w=1000&auto=format&fit=crop" 
                alt="Elegant attire inspiration" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-gold/30 rounded-t-full m-4 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
