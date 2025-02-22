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
      <header className="flex items-center px-4 lg:px-6 h-14">
        <Link className="flex justify-center items-center" href="#">
          <MapPin className="mr-2 w-6 h-6" />
          <span className="font-bold">ParkEase</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 ml-auto">
          <Link
            className="font-medium text-sm underline-offset-4 hover:underline"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="font-medium text-sm underline-offset-4 hover:underline"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="font-medium text-sm underline-offset-4 hover:underline"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48 w-full">
          <div className="px-4 md:px-6 container">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none tracking-tighter">
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
          className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32 w-full"
        >
          <div className="px-4 md:px-6 container">
            <h2 className="mb-8 font-bold text-3xl text-center sm:text-4xl md:text-5xl tracking-tighter">
              Key Features
            </h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card >
                <CardHeader className="text-center">
                  <CardTitle>Real-time Availability</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center">
                  <div className="flex justify-center">
                    <Clock className="mb-4 w-12 h-12" />
                  </div>
                  <p className="text-center">
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
                  <CreditCard className="mb-4 w-12 h-12" />
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
                  <Smartphone className="mb-4 w-12 h-12" />
                  <p>
                    Access all features on-the-go with our user-friendly mobile
                    app.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="py-12 md:py-24 lg:py-32 w-full">
          <div className="px-4 md:px-6 container">
            <h2 className="mb-8 font-bold text-3xl text-center sm:text-4xl md:text-5xl tracking-tighter">
              How It Works
            </h2>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center bg-primary mb-4 rounded-full w-12 h-12 text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 font-bold text-xl">Search</h3>
                <p>
                  Enter your destination and find available parking spots
                  nearby.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center bg-primary mb-4 rounded-full w-12 h-12 text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 font-bold text-xl">Reserve</h3>
                <p>
                  Choose your preferred spot and reserve it for your desired
                  duration.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center bg-primary mb-4 rounded-full w-12 h-12 text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 font-bold text-xl">Park</h3>
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
          className="bg-primary py-12 md:py-24 lg:py-32 w-full text-primary-foreground"
        >
          <div className="px-4 md:px-6 container">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter">
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
      <footer className="flex sm:flex-row flex-col items-center gap-2 px-4 md:px-6 py-6 border-t w-full shrink-0">
        <p className="text-gray-500 text-xs dark:text-gray-400">
          © 2024 ParkEase. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
