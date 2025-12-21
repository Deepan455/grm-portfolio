import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white dark:bg-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Optimize Your Digital Presence
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Professional SEO services to boost your rankings and drive organic traffic.
            Data-driven strategies tailored for your business growth.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight Placeholder */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
            <p className="mt-2 text-lg text-gray-600">Comprehensive SEO solutions for every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-400">
            <div className="p-8 bg-white shadow rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              Service 1 Placeholder
            </div>
            <div className="p-8 bg-white shadow rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              Service 2 Placeholder
            </div>
            <div className="p-8 bg-white shadow rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              Service 3 Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
            <p className="mt-2 text-lg text-gray-600">Tips and trends from the world of SEO.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-400">
            <div className="p-8 bg-gray-50 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
              Blog Post 1 Placeholder
            </div>
            <div className="p-8 bg-gray-50 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
              Blog Post 2 Placeholder
            </div>
            <div className="p-8 bg-gray-50 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
              Blog Post 3 Placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
