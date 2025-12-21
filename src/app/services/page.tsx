import Link from "next/link";

export const metadata = {
    title: "Services | Alex Sterling",
    description: "Comprehensive SEO, Content Writing, and Digital Marketing services designed to elevate your brand.",
};

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                    Expertise Tailored to <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        Your Growth.
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
                    I don't just offer services; I provide strategic solutions that drive measurable results.
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50 dark:bg-zinc-900/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">SEO Strategy</h3>
                            <p className="text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                Data-driven optimization to improve your visibility. From technical audits to keyword dominance.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Technical SEO Audits', 'Keyword Research', 'On-Page Optimization', 'Competitor Analysis'].map((item) => (
                                    <li key={item} className="flex items-center text-slate-600 dark:text-zinc-400 text-sm">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 bg-indigo-600 text-white text-xs font-bold rounded-bl-xl z-10">POPULAR</div>
                            <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Content Writing</h3>
                            <p className="text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                Compelling narratives that engage and convert. I craft content that speaks to your audience.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Blog Strategy & Writing', 'Website Copywriting', 'Brand Storytelling', 'Email Newsletters'].map((item) => (
                                    <li key={item} className="flex items-center text-slate-600 dark:text-zinc-400 text-sm">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Digital Strategy</h3>
                            <p className="text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                Holistic marketing plans to scale your presence using organic and paid channels.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Marketing Roadmaps', 'Social Media Strategy', 'Analytics & Reporting', 'Growth Consulting'].map((item) => (
                                    <li key={item} className="flex items-center text-slate-600 dark:text-zinc-400 text-sm">
                                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
                    <p className="text-lg text-slate-600 dark:text-zinc-400">A transparent, results-focused process.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Discovery", desc: "We dive deep into your goals, audience, and challenges." },
                        { step: "02", title: "Strategy", desc: "I craft a tailored roadmap to achieve your specific KPIs." },
                        { step: "03", title: "Execution", desc: "Creating high-quality content and implementing technical fixes." },
                        { step: "04", title: "Growth", desc: "Continuous monitoring, reporting, and optimization." }
                    ].map((item, i) => (
                        <div key={i} className="text-center relative">
                            <div className="text-6xl font-black text-slate-100 dark:text-zinc-800 mb-4 select-none">{item.step}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">{item.title}</h3>
                            <p className="text-slate-600 dark:text-zinc-400 text-sm relative z-10 px-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-slate-50 dark:bg-zinc-900/50">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How long does it take to see SEO results?", a: "SEO is a long-term strategy. Typically, you can expect to see significant movement within 3-6 months, though technical fixes can have immediate impact." },
                            { q: "Do you work with startups?", a: "Absolutely. I love helping emerging brands find their voice and establish a strong digital foundation from day one." },
                            { q: "What makes your content different?", a: "I don't just write for robots. I write for humans first, ensuring engagement and trust, which ultimately signals quality to search engines." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-zinc-800">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h4>
                                <p className="text-slate-600 dark:text-zinc-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center px-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Need a custom package?</h2>
                <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 dark:bg-white px-8 font-medium text-white dark:text-slate-900 transition-colors hover:bg-slate-700 dark:hover:bg-zinc-200"
                >
                    Get a Quote
                </Link>
            </section>

        </div>
    );
}
