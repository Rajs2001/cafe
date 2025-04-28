import { ClerkProvider } from '@clerk/nextjs';
import { enUS } from '@clerk/localizations';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const signInUrl = '/sign-in';
  const signUpUrl = '/sign-up';
  const dashboardUrl = '/dashboard';
  const afterSignOutUrl = '/';

  return (
    <ClerkProvider
      localization={enUS}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      afterSignInUrl={dashboardUrl}
      afterSignUpUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      {children}
    </ClerkProvider>
  );
}
