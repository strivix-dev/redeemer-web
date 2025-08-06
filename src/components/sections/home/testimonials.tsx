'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import { FC } from 'react';

const Testimonials: FC = () => {
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
    <section className="py-24">
      <div className="px-4 md:px-6 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            Real Customer Stories
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who are earning money while
            they shop
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto"
        >
          {[
            {
              quote:
                'Redeemer is a game-changer for online shopping. The smart, easy, and convenient system has proven to be effective in saving money. Leveraging top reseller company strategies, it empowers consumers to stretch their dollars without impacting their monthly statements.',
              author: 'Noah Gross',
              role: 'Software Engineer',
              avatar: '/placeholder.svg?height=60&width=60&text=NG',
              delay: 0,
              earnings: '$1,247',
            },
            {
              quote:
                "This is the best addition to my browser! So easy to use and really made a huge difference in savings for me! I've earned enough to pay for my entire vacation.",
              author: 'Sara Jedwab',
              role: 'Marketing Manager',
              avatar: '/placeholder.svg?height=60&width=60&text=SJ',
              delay: 0.2, // Increased delay
              earnings: '$892',
            },
            {
              quote:
                'The idea of merging all discounts into one place is brilliant. No need to go to 5 websites to get this result & the extension uses only verified coupons which saves me time instead of getting me all excited for nothing.',
              author: 'Dionysios Chionis',
              role: 'Business Owner',
              avatar: '/placeholder.svg?height=60&width=60&text=DC',
              delay: 0.4, // Increased delay
              earnings: '$2,156',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: testimonial.delay }}
              className="group border-primary cursor-pointer"
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-primary/20 h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground leading-relaxed italic text-lg">
                      {testimonial.quote}
                    </blockquote>

                    <div className="flex items-center space-x-4 pt-4 border-t">
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                      </div>
                    </div>
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

export default Testimonials;
