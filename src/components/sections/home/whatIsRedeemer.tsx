'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Iphone15Pro from '@/components/ui/shadcn-io/iphone-15-pro';
import { motion, useInView } from 'framer-motion';
import {
  Chrome,
  CreditCard,
  DollarSign,
  Star,
  Ticket,
  User,
  Users,
} from 'lucide-react';
import { useRef } from 'react';

const WhatIsRedeemer = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const section1InView = useInView(section1Ref);
  const section2InView = useInView(section2Ref);
  const section3InView = useInView(section3Ref);

  return (
    <div className="bg-primary/20">
      <div className="relative flex flex-col lg:flex-row min-h-screen text-foreground max-w-screen-xl mx-auto">
        <div className="hidden lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:flex items-center justify-center p-8">
          <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: section1InView ? 1 : 0,
              scale: section1InView ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <Iphone15Pro
              className="h-[70vh]"
              videoSrc="/videos/redeemer-video-1.mp4"
            />
          </motion.div>
          <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: section2InView && !section1InView ? 1 : 0,
              scale: section2InView && !section1InView ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <Iphone15Pro
              className="h-[70vh]"
              videoSrc="/videos/redeemer-video-2.mp4"
            />
          </motion.div>
          <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: section3InView && !section2InView ? 1 : 0,
              scale: section3InView && !section2InView ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <Iphone15Pro
              className="h-[70vh]"
              videoSrc="/videos/redeemer-video-3.mp4"
            />
          </motion.div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <section
            ref={section1Ref}
            className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-16"
          >
            <motion.div
              className="lg:hidden w-full flex justify-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Iphone15Pro
                className="h-[70vh]"
                videoSrc="/videos/redeemer-video-1.mp4"
              />
            </motion.div>
            <motion.div
              className="max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Turn Every Deal into <br />
                <motion.span
                  className="text-brand-blue"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={section1InView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Fun Money
                </motion.span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Redeemer, every purchase puts cash back in your pocket—whether
                for concert tickets, gaming gear, or even car payments.
              </p>
              <Button
                size="lg"
                className="bg-brand-blue text-brand-blue-foreground hover:bg-brand-blue/90 transition-all duration-300 px-8 py-3 text-sm tracking-wider rounded-full flex items-center gap-2"
              >
                <Chrome size={20} /> Add to Chrome
              </Button>
              <div className="flex items-center mt-4 space-x-2">
                <div className="flex text-brand-yellow">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-muted-foreground text-sm">
                  <Users size={16} className="inline-block mr-1" />
                  300+ users
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                The more you shop, the more you collect!
              </p>
            </motion.div>
          </section>

          <section
            ref={section2Ref}
            className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-16"
          >
            {/* Mobile Phone for Section 2 */}
            <motion.div
              className="lg:hidden w-full flex justify-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Iphone15Pro
                className="h-[70vh]"
                videoSrc="/videos/redeemer-video-2.mp4"
              />
            </motion.div>
            <motion.div
              className="max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-8">
                Why Choose <br />
                <motion.span
                  className="text-brand-blue"
                  initial={{ opacity: 0, x: -20 }}
                  animate={section2InView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Redeemer?
                </motion.span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={section2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            Instant Cash Back
                          </h4>
                          <p className="text-muted-foreground">
                            Get money back on purchases automatically.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={section2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            Credit Card Rewards
                          </h4>
                          <p className="text-muted-foreground">
                            Maximize your existing card benefits.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={section2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                          <Ticket className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            Exclusive Coupons
                          </h4>
                          <p className="text-muted-foreground">
                            Access deals not found anywhere else.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={section2InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                          <Chrome className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            Seamless Integration
                          </h4>
                          <p className="text-muted-foreground">
                            Works automatically with your browser.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section
            ref={section3Ref}
            className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-16"
          >
            {/* Mobile Phone for Section 3 */}
            <motion.div
              className="lg:hidden w-full flex justify-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Iphone15Pro
                className="h-[70vh]"
                videoSrc="/videos/redeemer-video-3.mp4"
              />
            </motion.div>
            <motion.div
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Meet the <span className="text-brand-blue">Founders</span>.
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Redeemer was founded by a team of experienced entrepreneurs and
                engineers who are passionate about helping people save money.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={section3InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <User className="w-8 h-8 text-brand-blue" />
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          Isaac Lapidus
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Co-Founder & CEO
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={section3InView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <User className="w-8 h-8 text-brand-blue" />
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          Maddy Rosenfeld
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Co-Founder
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhatIsRedeemer;
