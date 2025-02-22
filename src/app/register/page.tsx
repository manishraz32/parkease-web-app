'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
//import { cn } from '@/lib/utils';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData , setFormData] = useState({
     name:"",
     email:"",
     password:""
  })
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 3000);
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const{name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="relative flex-col justify-center items-center grid lg:grid-cols-2 lg:px-0 lg:max-w-none min-h-screen container">
      <div className="hidden relative lg:flex flex-col bg-muted p-10 dark:border-r h-full text-white">
        <div className="absolute inset-0 bg-zinc-900">
          <Image
            src="/placeholder.svg?height=800&width=800"
            width={800}
            height={800}
            alt="Authentication"
            className="dark:hidden block object-cover"
          />
          <Image
            src="/placeholder.svg?height=800&width=800"
            width={800}
            height={800}
            alt="Authentication"
            className="hidden dark:block object-cover"
          />
        </div>
        <div className="z-20 relative flex items-center font-medium text-lg">
          <Icons.logo className="mr-2 w-6 h-6" />
          Your Company
        </div>
        <div className="z-20 relative mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Joining this platform was the best decision for our
              business. The features are exactly what we needed to streamline
              our operations.&rdquo;
            </p>
            <footer className="text-sm">Alex Johnson, CEO of TechStart</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="flex flex-col justify-center space-y-6 mx-auto w-full sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Create an account
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter your details below to create your account
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="gap-2 grid">
              <div className="gap-1 grid">
                <Label className="sr-only" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  autoCapitalize="words"
                  autoComplete="name"
                  autoCorrect="off"
                  onChange={handleInput}
                  disabled={isLoading}
                />
              </div>
              <div className="gap-1 grid">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  onChange={handleInput}
                  disabled={isLoading}
                />
              </div>
              <div className="gap-1 grid">
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  autoCapitalize="none"
                  autoComplete="new-password"
                  autoCorrect="off"
                  onChange={handleInput}
                  disabled={isLoading}
                />
              </div>
              <Button disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
                )}
                Sign Up
              </Button>
            </div>
          </form>
          {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="border-t w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div> */}
          {/* <Button variant="outline" type="button" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
            ) : (
              <Icons.gitHub className="mr-2 w-4 h-4" />
            )}{' '}
            GitHub
          </Button> */}
          <p className="px-8 text-muted-foreground text-sm text-center">
            By clicking continue, you agree to our{' '}
            <a
              href="/terms"
              className="hover:text-primary underline underline-offset-4"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              className="hover:text-primary underline underline-offset-4"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="px-8 text-muted-foreground text-sm text-center">
            Already have an account?{' '}
            <a
              href="/login"
              className="hover:text-primary underline underline-offset-4"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
