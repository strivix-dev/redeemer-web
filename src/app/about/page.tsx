'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Reusable component for fade-in and slide-up animation
function AnimatedSection({
  children,
  delay = 0.1,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                Smart, easy, and convenient online shopping to save you the most
                amount of money.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
                We’ve taken every strategy developed through years as one of the
                top reseller companies in the world and created a system that
                supercharges consumer spending power.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <AnimatedSection delay={0.1}>
                <div className="flex flex-col items-center">
                  <h2 className="text-5xl font-bold text-primary">$5M+</h2>
                  <p className="text-lg text-muted-foreground">
                    In Credit Card Points
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="flex flex-col items-center">
                  <h2 className="text-5xl font-bold text-primary">$2M+</h2>
                  <p className="text-lg text-muted-foreground">
                    In Cash Back Rewards
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="flex flex-col items-center">
                  <h2 className="text-5xl font-bold text-primary">35K+</h2>
                  <p className="text-lg text-muted-foreground">
                    Followers on Social Media
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <AnimatedSection delay={0.1}>
              <Image
                src="/our-story.png"
                width={600}
                height={400}
                alt="Our Story"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </AnimatedSection>
            <div className="flex flex-col justify-center space-y-4">
              <AnimatedSection delay={0.2}>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4">
                  From Marital Dilemma to Multi-Million Dollar Success
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  It started with a classic marital dilemma: Maddy loves to
                  shop, and Isaac loves to save. Instead of clashing, we
                  combined our passions to create Redeemer. Thus began the
                  creation of a multimillion-dollar e-commerce business with
                  sales of a variety of products at the lowest prices to
                  consumers.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  Now, Isaac and Maddy want to share their knowledge and skill
                  for saving with the creation of Redeemer, empowering others to
                  shop smarter and live more abundantly.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection delay={0.1}>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4">
                Empowering Your Shopping, Maximizing Your Savings
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
                Redeemer is all about making your shopping smarter and more
                rewarding. We’ve distilled years of saving strategies into a
                simple tool that stretches your dollar without stretching your
                budget. Our goal is to transform the way you shop, turning every
                purchase into an opportunity for greater value.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Meet The Founders
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection delay={0.2}>
                <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/isaac-lapidus.png"
                    width={150}
                    height={150}
                    alt="Isaac Lapidus"
                    className="rounded-full object-cover mb-4 border-4 border-primary"
                  />
                  <CardHeader className="w-full">
                    <CardTitle className="text-2xl font-semibold">
                      Isaac Lapidus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      Expert shopper who’s honed his skills over years as a top
                      online reseller. Isaac brings a deep understanding of
                      market dynamics and value extraction to Redeemer.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/maddy-rosenfeld.png"
                    width={150}
                    height={150}
                    alt="Maddy Rosenfeld"
                    className="rounded-full object-cover mb-4 border-4 border-primary"
                  />
                  <CardHeader className="w-full">
                    <CardTitle className="text-2xl font-semibold">
                      Maddy Rosenfeld
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      Entrepreneur with a track record of building companies
                      focused on affordability. Maddy's vision and business
                      acumen drive Redeemer's mission to empower consumers.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center ">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Join Us
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8">
                Whether you’re a deal hunter or a savings enthusiast, Redeemer
                helps you enjoy the best of both worlds. Connect with us to
                start your journey to smarter shopping.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Button asChild size="lg" className="px-8 py-3 text-lg">
                <Link
                  href="mailto:info@joinredeemer.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  info@joinredeemer.com
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
};
export default AboutPage;
