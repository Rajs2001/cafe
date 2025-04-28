import { Sponsors } from '@/components/Sponsors';

export const metadata = {
  title: 'Next.js Boilerplate Presentation',
  description: 'Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.',
};

export default function Index() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        Next.js Boilerplate
      </h1>

      <p>
        Next.js Boilerplate is a starter code for your Next.js project with all
        the features you need to build a robust web application.
      </p>

      <h2 className="text-xl font-semibold mt-5">Sponsors</h2>
      <Sponsors />
    </>
  );
}
