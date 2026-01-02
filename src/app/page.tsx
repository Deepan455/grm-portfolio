import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(100,100,250,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(45%_40%_at_50%_60%,rgba(100,100,250,0.03),rgba(0,0,0,0))]"></div>

        <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-6 animate-fade-in-up">
          Garima Bhandari
        </p>
        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
          Elevating Digital Experiences through <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Quality & Strategy</span>
        </h1>
        <p className="max-w-2xl text-xl text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed">
          I help forward-thinking brands grow with precision-driven Content, SEO, Digital Marketing, and Quality Assurance services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
          >
            Work With Me
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 bg-transparent border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-300 font-medium rounded-full hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
                Core Expertise
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400">
                Holistic solutions tailored to your digital lifecycle.
              </p>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
              Explore all services <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Content Writing</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Compelling narratives that engage your audience and drive conversions, from blog posts to technical documentation.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 hover:shadow-xl hover:border-purple-100 dark:hover:border-purple-900/30 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">SEO Strategy</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Data-driven visibility improvements to help your brand rank higher and attract organic traffic.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Digital Marketing</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Holistic campaigns that integrate social, email, and paid channels for sustainable growth.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 hover:shadow-xl hover:border-emerald-100 dark:hover:border-emerald-900/30 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Quality Assurance</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Rigorous testing to ensure your digital products are flawless, performant, and user-friendly.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 transition-colors">
              Explore all services <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Garima / About Brief */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
                Hi, I'm Garima.
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
                I am a digital strategist obsessed with quality. Whether it's crafting the perfect sentence, optimizing for the latest search algorithm, or testing a critical user flow, I believe that details matter.
              </p>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                With over 5 years of experience working with startups and established brands, I bridge the gap between creative storytelling and technical precision.
              </p>
              <Link href="/about" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                Read more about my journey &rarr;
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 dark:bg-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200 dark:border-zinc-800">
                {/* Placeholder for Profile Image */}
                <p className="text-slate-400 dark:text-zinc-600 font-medium">Profile Image Placeholder</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-50 dark:bg-indigo-900/10 rounded-full -z-10 blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
