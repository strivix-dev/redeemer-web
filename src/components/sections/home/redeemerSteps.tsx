'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Chrome, CreditCard, Target, Zap } from 'lucide-react';
import { FC } from 'react';

const RedeemerSteps: FC = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className=" px-4 md:px-6 relative max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Target className="w-4 h-4 mr-2" />
            Simple 3-Step Process
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start earning cashback in minutes with our award-winning Chrome
            extension
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid gap-12 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {[
            {
              step: '01',
              title: 'Add to Chrome',
              description:
                'Add it to your computer in just a few clicks—completely free. No credit card required, no hidden fees.',
              icon: Chrome,
              delay: 0,
              color: 'bg-blue-500',
              image:
                '/placeholder.svg?height=300&width=400&text=Chrome Extension Install',
            },
            {
              step: '02',
              title: 'Activate your Cash Back',
              description:
                'We provide cashback for over 50+ retail stores. Our API automatically finds the best deals and applies coupons.',
              icon: Zap,
              delay: 0.3, // Increased delay
              color: 'bg-green-500',
              image:
                '/placeholder.svg?height=300&width=400&text=Cashback Activation',
            },
            {
              step: '03',
              title: 'Collect your Fun Money',
              description:
                'Earn cashback plus credit card recommendations and coupon codes to boost your savings exponentially.',
              icon: CreditCard,
              delay: 0.6, // Increased delay
              color: 'bg-purple-500',
              image:
                '/placeholder.svg?height=300&width=400&text=Earnings Dashboard',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: item.delay }}
              className="group relative"
            >
              <Card className="relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-2">
                <CardContent className="p-0 relative">
                  <div className="absolute right-2 top-2">
                    <div
                      className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg`}
                    >
                      {item.step}
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div
                      className={`w-16 h-16 ${item.color}/10 rounded-2xl flex items-center justify-center`}
                    >
                      <item.icon
                        className={`w-8 h-8 text-${item.color.split('-')[1]}-500`}
                      />
                    </div>

                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.description}
                    </p>

                    {/* Progress Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, delay: item.delay + 0.8 }}
                      className="w-full bg-muted rounded-full h-2 overflow-hidden"
                    >
                      <div className={`h-full ${item.color} rounded-full`} />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RedeemerSteps;
