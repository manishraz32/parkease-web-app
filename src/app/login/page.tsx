'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
import { useLoginUser } from '@/queries/auth';
import localStorageUtil from '@/utils/localStorageHelpers';
import cookieStorage from '@/utils/cookieStorage';
//import { cn } from '@/lib/utils';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logindata, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { mutate: userMutate } = useLoginUser();
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    console.log(event);
    event.preventDefault();
    //setIsLoading(true);
    userMutate(logindata, {
      onSuccess: (response: any) => {
        console.log('response', response);

        if (response?.success && response?.data?.token) {
          localStorageUtil.setItem('token', response.data.token);
          const {
            _id,
            username,
            email,
            role,
            profilePicture,
            address,
            isEmailVerified,
            parkingSpaces,
            bookings,
          } = response.data.user;

          localStorageUtil.setItem('user', {
            _id,
            username,
            email,
            role,
            profilePicture,
            address,
            isEmailVerified,
            parkingSpaces,
            bookings,
          });
          
          cookieStorage.setItem('role', { role }, 7);
          router.push('/findparking');
        }
      },
    });
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);

    const { name, value } = e.target;

    setLoginData({
      ...logindata,
      [name]: value,
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
              &ldquo;This platform has transformed how we handle our daily
              operations. It's intuitive, efficient, and a joy to use.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="flex flex-col justify-center space-y-6 mx-auto w-full sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter your email to sign in to your account
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="gap-2 grid">
              <div className="gap-1 grid">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  name="email"
                  onChange={handleInput}
                  value={logindata.email}
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
                  autoCapitalize="none"
                  autoComplete="current-password"
                  autoCorrect="off"
                  name="password"
                  onChange={handleInput}
                  value={logindata.password}
                  disabled={isLoading}
                />
              </div>
              <Button>
                {/* {isLoading && (
                  <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
                )} */}
                Sign In
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="border-t w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" type="button" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
            ) : (
              <Icons.gitHub className="mr-2 w-4 h-4" />
            )}{' '}
            GitHub
          </Button>
          <p className="px-8 text-muted-foreground text-sm text-center">
            <a
              href="/register"
              className="hover:text-primary underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
