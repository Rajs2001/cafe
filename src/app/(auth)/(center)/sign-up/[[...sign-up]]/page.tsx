import { SignUp } from '@clerk/nextjs';

export const metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
};

export default function SignUpPage() {
  return (
    <SignUp path="/sign-up" />
  );
}
