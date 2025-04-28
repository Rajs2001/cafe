import { DemoBanner } from '@/components/DemoBanner';
import { BaseTemplate } from '@/templates/BaseTemplate';
import Link from 'next/link';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DemoBanner />

      <BaseTemplate
        leftNav={(
          <>
            <li>
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/counter/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Counter
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/products/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Products
              </Link>
            </li>
            <li>
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </>
        )}
        rightNav={(
          <>
            <li>
              <Link
                href="/sign-in/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Sign in
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Sign up
              </Link>
            </li>
          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{children}</div>
      </BaseTemplate>
    </>
  );
}
