// components/auth-dialog.tsx
'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form'; 


interface AuthFields {
  email: string;
  password: string;
}


interface SignUpFields extends AuthFields {
  fullName: string;
}


interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const API_BASE_URL = 'https://code-commando.com/api/v1';

  // React Hook Form setup for Login
  const { register: registerLogin, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors }, reset: resetLoginForm } = useForm<AuthFields>();

  // React Hook Form setup for Signup
  const { register: registerSignup, handleSubmit: handleSignupSubmit, formState: { errors: signupErrors }, reset: resetSignupForm } = useForm<SignUpFields>();


  // Handle Login Submission
  const onLoginSubmit: SubmitHandler<AuthFields> = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      });

      const responseData = response.data;
      localStorage.setItem('userToken', responseData.token);
      toast.success('Successfully logged in!', {
        description: `Welcome back, ${responseData.fullName || data.email}!`,
      });
      onClose();
      resetLoginForm(); // Reset form fields on success
      router.push('/');
    } catch (err) {
      console.error('Login error:', err);
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        toast.error((axiosError.response.data as { message?: string })?.message || 'Login failed. Please check your credentials.');
      } else if (axiosError.request) {
        toast.error('No response from server. Please check your internet connection.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Signup Submission
  const onSignupSubmit: SubmitHandler<SignUpFields> = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/users/register`, {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      const responseData = response.data;
      toast.success('Registration successful!', {
        description: 'You can now sign in with your new account.',
      });
      setIsLogin(true);
      resetSignupForm(); 
      resetLoginForm({ email: data.email, password: '' }); 
    } catch (err) {
      console.error('Signup error:', err);
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        toast.error((axiosError.response.data as { message?: string })?.message || 'Registration failed. User might already exist.');
      } else if (axiosError.request) {
        toast.error('No response from server. Please check your internet connection.');
      } else {
        toast.error('An unexpected error occurred during registration. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-center'>{isLogin ? "Sign In" : "Sign Up"}</DialogTitle>
          <DialogDescription>
            {isLogin ? "Enter your credentials to access your account." : "Create an account to get started with Fresh Harvests."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {isLogin ? (
            <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
              <div className="grid gap-2 mb-4">
                <Label htmlFor="email-login">Email</Label>
                <Input
                  id="email-login"
                  type="email"
                  placeholder="you@example.com"
                  {...registerLogin("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                />
                {loginErrors.email && <p className="text-red-500 text-xs mt-1">{loginErrors.email.message}</p>}
              </div>
              <div className="grid gap-2 mb-4">
                <Label htmlFor="password-login">Password</Label>
                <Input
                  id="password-login"
                  type="password"
                  {...registerLogin("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                />
                {loginErrors.password && <p className="text-red-500 text-xs mt-1">{loginErrors.password.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-primaryColor" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit(onSignupSubmit)}>
              <div className="grid gap-2 mb-4">
                <Label htmlFor="name-signup">Full Name</Label>
                <Input
                  id="name-signup"
                  type="text"
                  placeholder="John Doe"
                  {...registerSignup("fullName", { required: "Full Name is required" })}
                />
                {signupErrors.fullName && <p className="text-red-500 text-xs mt-1">{signupErrors.fullName.message}</p>}
              </div>
              <div className="grid gap-2 mb-4">
                <Label htmlFor="email-signup">Email</Label>
                <Input
                  id="email-signup"
                  type="email"
                  placeholder="you@example.com"
                  {...registerSignup("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                />
                {signupErrors.email && <p className="text-red-500 text-xs mt-1">{signupErrors.email.message}</p>}
              </div>
              <div className="grid gap-2 mb-4">
                <Label htmlFor="password-signup">Password</Label>
                <Input
                  id="password-signup"
                  type="password"
                  {...registerSignup("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                />
                {signupErrors.password && <p className="text-red-500 text-xs mt-1">{signupErrors.password.message}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Sign Up'}
              </Button>
            </form>
          )}
          <Button
            variant="link"
            onClick={() => {
              setIsLogin(!isLogin);
              resetLoginForm(); // Reset both forms when switching
              resetSignupForm();
            }}
            className="mt-2"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}