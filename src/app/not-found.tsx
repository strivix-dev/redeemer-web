'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Search, Zap } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Animation */}
          <div className="relative">
            <div className="text-9xl font-bold text-primary/20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Page Not Found
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Oops! This Deal{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text ">
                Expired
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Looks like this page went out of stock! Don't worry, we've got
              plenty of other ways to help you save money.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button
              //   asChild
              variant="outline"
              size="lg"
              onClick={() => history.back()}
            >
              <>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </>
            </Button>
          </div>

          {/* Fun Money Reminder */}
          <div className="bg-muted/50 rounded-2xl p-6 mt-12">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Pro tip:</strong> While you're here, why not install
              our Chrome extension and start earning cashback on your next
              purchase?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
