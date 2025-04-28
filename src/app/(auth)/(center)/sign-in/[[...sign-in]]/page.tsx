import { SignIn } from '@clerk/nextjs';

export const metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return (
    <SignIn path="/sign-in" />
  );
}
