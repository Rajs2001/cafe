import { UserProfile } from '@clerk/nextjs';

export const metadata = {
  title: 'User Profile',
};

export default function UserProfilePage() {
  return (
    <div className="my-6 -ml-16">
      <UserProfile
        path="/dashboard/user-profile"
      />
    </div>
  );
}
