import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About Garima Bhandari | SEO & Digital Strategy",
    description: "Learn about Garima Bhandari's journey, philosophy, and experience in SEO, Content Writing, and Quality Assurance.",
};

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-zinc-950 min-h-screen">

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                    More Than Just Strategy—<br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                        Results Driven by Passion.
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
                    I bridge the gap between technical precision and creative storytelling to build digital experiences that matter.
                </p>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-900/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                        <div className="lg:col-span-5 mb-12 lg:mb-0 relative">
                            <div className="aspect-[4/5] bg-slate-200 dark:bg-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-300 dark:border-zinc-700 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/avatar.png"
                                    alt="Garima Bhandari Avatar"
                                    width={500}
                                    height={625}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -z-10 top-12 -left-12 w-full h-full border-2 border-indigo-500/20 dark:border-indigo-400/20 rounded-2xl -rotate-2"></div>
                        </div>
                        <div className="lg:col-span-7">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">My Journey</h2>
                            <div className="space-y-6 text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
                                <p>
                                    Technology has always been my playground, but it wasn't until I discovered the intersection of data and design that I found my true calling.
                                    With over 5 years of experience in the digital landscape, I've transitioned from a curious observer to a strategic executor.
                                </p>
                                <p>
                                    I started my career in Quality Assurance, learning the importance of flawless user experiences. This attention to detail naturally evolved into
                                    Content Writing and SEO, where I realized that a great website isn't just about code—it's about connection.
                                </p>
                                <p>
                                    Today, I help brands amplify their voice. Whether I'm auditing a technical SEO setup or crafting a compelling brand narrative, my goal remains the same:
                                    <strong> To create work that works.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Values */}
            <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Philosophy</h2>
                    <p className="text-lg text-slate-600 dark:text-zinc-400">The values that guide every project I undertake.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Precision",
                            desc: "Details aren't just details. They make the design. I obsess over the small things so you don't have to.",
                            icon: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )
                        },
                        {
                            title: "Empathy",
                            desc: "Understanding the user is paramount. I design and write with real people in mind, not just algorithms.",
                            icon: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            )
                        },
                        {
                            title: "Growth",
                            desc: "Digital landscapes change fast. I stay ahead of the curve, constantly learning and adapting strategies.",
                            icon: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            )
                        }
                    ].map((value, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-indigo-600 dark:bg-indigo-900/30 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Years Experience", value: "5+" },
                            { label: "Projects Delivered", value: "50+" },
                            { label: "Happy Clients", value: "30+" },
                            { label: "Coffee Consumed", value: "∞" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-indigo-100 dark:text-indigo-300 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center px-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ready to create something extraordinary?</h2>
                <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 dark:bg-white px-8 font-medium text-white dark:text-slate-900 transition-colors hover:bg-slate-700 dark:hover:bg-zinc-200"
                >
                    Let's Talk
                </Link>
            </section>

        </div>
    );
}
