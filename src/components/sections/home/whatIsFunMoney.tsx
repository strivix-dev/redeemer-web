'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const WhatIsFunMoney: FC = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Increased item duration
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Increased image duration
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Increased text duration
  };
  return (
    <section className="py-24 relative">
      <div className="px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <Image
              src="/fun-money.gif"
              alt="Fun Money"
              width={600}
              height={500}
              className="rounded-3xl shadow-2xl max-w-full h-full"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Fun Money Philosophy
            </Badge> */}

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              What Is{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
                Fun Money?
              </span>
            </h2>

            <div className="bg-muted-foreground/5 rounded-3xl p-8 border-l-4 border-primary">
              <blockquote className="text-xl leading-relaxed text-muted-foreground italic font-medium">
                "Fun money is your guilt-free cash-back stash—extra savings that
                no one needs to know about. Use it for gaming, new kicks, a
                night out, or maybe to finally book that trip you've been
                talking about. Or, if you're feeling responsible (ugh), throw it
                at your mortgage or car payment. No judgment. Redeemer's here to
                make your savings your business."
              </blockquote>
            </div>

            {/* <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">$247</div>
                <div className="text-sm text-muted-foreground">
                  Average Monthly Earnings
                </div>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">5.2%</div>
                <div className="text-sm text-muted-foreground">
                  Average Cashback Rate
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsFunMoney;
