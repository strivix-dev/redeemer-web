'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { redeemerShopUrl } from '@/constants';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

const RedeemerShop: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Increased image duration
  };
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="px-4 md:px-6 mx-auto max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center space-y-10"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <ShoppingBag className="w-4 h-4 mr-2" />
              New! Redeemer Shop
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6"
          >
            Unleash Your Inner Tech Enthusiast with{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
              Redeemer Shop
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Your Fun Money just got an upgrade! Explore a curated collection of
            cutting-edge drones, gadgets, and more. Spend your cashback on the
            tech you've always wanted.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
            className="relative w-full max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden border"
          >
            <Image
              src="/redeemer-shop-banner.webp"
              alt="Redeemer Shop Banner"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-8 left-8">
              <Image
                src="/redeemer-shop-logo.png"
                alt="Redeemer Shop Logo"
                width={150}
                height={50}
                className="h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105"
              onClick={() => window.open(redeemerShopUrl)}
            >
              Shop Now
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RedeemerShop;
