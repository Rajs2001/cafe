import Image from 'next/image';

export const metadata = {
  title: 'About',
  description: 'About Next.js Boilerplate',
};

export default function About() {
  return (
    <>
      <p>
        This project is a boilerplate for Next.js with a focus on developer experience and best practices.
        It includes TypeScript, ESLint, Prettier, Husky, and many other tools to help you build a robust application.
      </p>

      <div className="mt-2 text-center text-sm">
        Translation powered by{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://l.crowdin.com/next-js"
        >
          Crowdin
        </a>
      </div>

      <a href="https://l.crowdin.com/next-js">
        <Image
          className="mx-auto mt-2"
          src="/assets/images/crowdin-dark.png"
          alt="Crowdin Translation Management System"
          width={128}
          height={26}
        />
      </a>
    </>
  );
}
