import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact | Garima Bhandari",
    description: "Get in touch with Garima Bhandari for your next SEO project.",
};

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">

            <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let's Start a Conversation</h1>
                    <p className="text-xl text-slate-600 dark:text-zinc-400">
                        Whether you have a specific project in mind or just want to explore what's possible, I'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <div className="bg-slate-50 dark:bg-zinc-900/50 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800">
                        <ContactForm />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12 lg:pt-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Email</h4>
                                        <p className="text-slate-600 dark:text-zinc-400">pradippandey455@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Office</h4>
                                        <p className="text-slate-600 dark:text-zinc-400">San Francisco, CA<br />(Remote Available Worldwide)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/garima-bhandari-886349246/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
