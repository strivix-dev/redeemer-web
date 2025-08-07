'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const SavingPhilosophy: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Increased stagger delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Increased item duration
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Increased image duration
  };

  return (
    <section className="py-24 bg-primary/20 overflow-hidden">
      <div className="px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Savings for Whatever{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text ">
                You're Into
              </span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="bg-muted-foreground/5 rounded-3xl p-8 border-l-4 border-primary"
            >
              <p className="text-xl leading-relaxed text-muted-foreground font-medium">
                Let's be real—extra cash makes life better. Whether you're
                saving up for that PS5, a new pair of sneakers, a spa day, or
                just trying to offset your avocado toast addiction, Redeemer's
                got you. For the more responsible crowd, sure, put it toward
                your car or mortgage. We guess that's cool too.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4"
            >
              <motion.div
                variants={itemVariants}
                className="text-center p-4 bg-muted-foreground/5 rounded-xl"
              >
                <div className="text-2xl font-bold text-primary mb-1">73%</div>
                <div className="text-xs text-muted-foreground">Use for Fun</div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center p-4 bg-muted-foreground/5 rounded-xl"
              >
                <div className="text-2xl font-bold text-primary mb-1">19%</div>
                <div className="text-xs text-muted-foreground">
                  Save for Later
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center p-4 bg-muted-foreground/5 rounded-xl"
              >
                <div className="text-2xl font-bold text-primary mb-1">8%</div>
                <div className="text-xs text-muted-foreground">Pay Bills</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <Image
              src="/saving-philosophy.gif"
              alt="Lifestyle Choices"
              width={600}
              height={500}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SavingPhilosophy;
