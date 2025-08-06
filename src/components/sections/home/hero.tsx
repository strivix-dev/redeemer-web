'use client';

import Logo from '@/assets/logo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { extensionUrl } from '@/constants';
import {
  ArrowRight,
  Chrome,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32 max-w-screen-xl mx-auto">
      <div className="px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <Badge variant="secondary" className="w-fit animate-pulse">
                <Zap className="w-3 h-3 mr-1" />
                Turn Every Purchase Into Rewards
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Turn Every{' '}
                <span className=" bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Deal
                </span>{' '}
                into{' '}
                <span className=" bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Fun Money
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">
                Redeemer puts cash back in your pocket with every
                purchase—whether for concert tickets, gaming gear, or even car
                payments. The more you shop, the more you collect!
              </p>
            </div>

            <div
              className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <Button
                size="lg"
                onClick={() => window.open(extensionUrl)}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>300+ users</span>
                </div>
              </div>

              <p className="text-sm font-medium text-foreground">
                The more you shop, the more you collect!
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
          >
            <div className="relative mx-auto max-w-lg">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce delay-1000" />
              <div className="absolute -top-8 right-8 w-8 h-8 bg-primary rounded-full animate-pulse delay-500" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full animate-bounce delay-1500" />

              {/* Main Phone Mockup */}
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="text-center">
                    <div className="w-full flex justify-center">
                      <Logo />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Chrome Extension
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">$</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">CASH BACK</div>
                        <div className="text-xs text-muted-foreground">
                          5% on all purchases
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">%</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">COUPONS</div>
                        <div className="text-xs text-muted-foreground">
                          Auto-applied deals
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">ALERTS</div>
                        <div className="text-xs text-muted-foreground">
                          Price drop notifications
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-3 animate-float">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>

              <div className="absolute -right-8 top-1/3 bg-white rounded-lg shadow-lg p-3 animate-float delay-1000">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
  //       {/* Hero Section */}

  //       {/* How It Works Section */}
  //       <section className="py-20 bg-muted/30">
  //         <div className="container px-4 md:px-6">
  //           <div
  //             className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  //           >
  //             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
  //               How It Works
  //             </h2>
  //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //               Get started with Redeemer in just a few simple steps
  //             </p>
  //           </div>

  //           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
  //             {[
  //               {
  //                 step: '1',
  //                 title: 'Add to Chrome',
  //                 description:
  //                   'Add it to your computer in just a few clicks—completely free.',
  //                 icon: Chrome,
  //                 delay: 'delay-200',
  //               },
  //               {
  //                 step: '2',
  //                 title: 'Activate your Cash Back',
  //                 description:
  //                   'We provide cashback for over 50+ popular online stores.',
  //                 icon: Zap,
  //                 delay: 'delay-400',
  //               },
  //               {
  //                 step: '3',
  //                 title: 'Start Earning',
  //                 description:
  //                   'Shop normally and watch your rewards grow with every purchase.',
  //                 icon: TrendingUp,
  //                 delay: 'delay-600',
  //               },
  //             ].map((item, index) => (
  //               <div
  //                 key={index}
  //                 className={`group relative bg-background rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${item.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  //               >
  //                 <div className="absolute -top-4 left-8">
  //                   <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
  //                     {item.step}
  //                   </div>
  //                 </div>

  //                 <div className="pt-4 space-y-4">
  //                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
  //                     <item.icon className="w-6 h-6 text-primary" />
  //                   </div>

  //                   <h3 className="text-xl font-semibold">{item.title}</h3>
  //                   <p className="text-muted-foreground leading-relaxed">
  //                     {item.description}
  //                   </p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* CTA Section */}
  //       <section className="py-20">
  //         <div className="container px-4 md:px-6">
  //           <div
  //             className={`text-center space-y-8 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  //           >
  //             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
  //               Ready to Start Earning?
  //             </h2>
  //             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //               Join thousands of users who are already turning their everyday
  //               purchases into rewards.
  //             </p>
  //             <Button
  //               size="lg"
  //               className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
  //             >
  //               <Chrome className="w-5 h-5 mr-2" />
  //               Get Started Now
  //               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
  //             </Button>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
}
