'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Full-Stack Developer & Co-Founder',
    bio: '10+ years building scalable web platforms. Obsessed with clean architecture and developer experience.',
  },
  {
    name: 'Jordan Chen',
    role: 'Full-Stack Developer & Co-Founder',
    bio: 'Former lead engineer at a Series B startup. Specializes in APIs, databases, and system design.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">Who we are</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">The Team</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-5 border border-border" />
              <h3 className="text-lg font-serif font-bold text-foreground">{member.name}</h3>
              <p className="text-sm font-sans text-primary mb-2">{member.role}</p>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto text-sm md:text-base font-sans text-muted-foreground leading-relaxed"
        >
          We believe great software is built through craftsmanship and close partnership. We don't just ship code — we
          embed ourselves in your vision, working as an extension of your team to create products that last.
        </motion.p>
      </div>
    </section>
  );
}
