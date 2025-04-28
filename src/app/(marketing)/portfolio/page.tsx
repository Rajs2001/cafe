import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio page',
};

export default function Portfolio() {
  return (
    <>
      <h1 className="text-2xl font-bold">Portfolio</h1>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from(Array.from({ length: 6 }).keys()).map((elt) => (
          <div
            key={elt}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-md"
          >
            <h2 className="mb-2 text-xl font-bold">Item {elt}</h2>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link
              href={`/portfolio/${elt}`}
              className="text-blue-600 hover:text-blue-800"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
