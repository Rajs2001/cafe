export function generateStaticParams() {
  return Array.from(Array.from({ length: 6 }).keys()).map(elt => ({
    slug: `${elt}`,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `Portfolio Item ${params.slug}`,
    description: `This is portfolio item ${params.slug}`,
  };
}

export default function PortfolioSlug({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1 className="text-2xl font-bold">Portfolio Item {params.slug}</h1>

      <div className="mt-4">
        <p>
          This is the detail page for portfolio item {params.slug}.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl
          nisl nec nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl
          aliquam nisl, nec ultricies nisl nisl nec nisl.
        </p>
      </div>
    </>
  );
}
