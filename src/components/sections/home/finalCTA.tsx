'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { extensionUrl } from '@/constants';
import {
  ArrowRight,
  CheckCircle,
  Chrome,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { FC, useEffect, useState } from 'react';

const FinalCTA: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="py-24 to-background">
      <div className=" px-4 md:px-6 max-w-screen-lg mx-auto">
        <div
          className={`text-center space-y-10 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Join the Movement
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Add to Chrome - It's Free
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Redeemer has already provided members with over $2,000,000 in cash
            back. Start your saving journey now and join thousands of smart
            shoppers earning money while they spend.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={() => window.open(extensionUrl)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105"
            >
              <Chrome className="w-6 h-6 mr-3" />
              Add to Chrome - It's Free
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              {/* <span className="text-sm">Rated 4.9/5 by 10,000+ users</span> */}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-muted-foreground">100% Free</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-muted-foreground">
                Secure & Private
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground">
                Instant Setup
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
