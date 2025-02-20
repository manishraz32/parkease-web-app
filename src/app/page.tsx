'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, CreditCard, Smartphone } from 'lucide-react';
import { useGetPost } from '@/queries/auth';

export default function LandingPage() {
  const { data: postdata } = useGetPost();
  console.log('postdata', postdata);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6 mr-2" />
          <span className="font-bold">ParkEase</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Parking Spots with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover and reserve parking spaces in your city with just a
                  few taps. Save time and avoid the hassle of finding parking.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <Clock className="h-12 w-12 mb-4" />
                  <p>
                    Find available parking spots in real-time, updated every
                    minute.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Easy Reservations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CreditCard className="h-12 w-12 mb-4" />
                  <p>
                    Reserve and pay for your parking spot in advance with just a
                    few taps.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mobile App</CardTitle>
                </CardHeader>
                <CardContent>
                  <Smartphone className="h-12 w-12 mb-4" />
                  <p>
                    Access all features on-the-go with our user-friendly mobile
                    app.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Search</h3>
                <p>
                  Enter your destination and find available parking spots
                  nearby.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Reserve</h3>
                <p>
                  Choose your preferred spot and reserve it for your desired
                  duration.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Park</h3>
                <p>
                  Follow the directions to your reserved spot and enjoy
                  hassle-free parking.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Simplify Your Parking Experience?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Join thousands of satisfied users who have made parking stress
                  a thing of the past.
                </p>
              </div>
              <Button variant="secondary" size="lg">
                Download the App
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 ParkEase. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
