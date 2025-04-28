import { Hello } from '@/components/Hello';

export const metadata = {
  title: 'Dashboard',
};

export default function Dashboard() {
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
