export const metadata = {
    title: "Contact | Garima Bhandari",
    description: "Get in touch with Garima Bhandari for your next digital project.",
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Jane" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="jane@example.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-600 dark:text-zinc-400">
                                    <option>General Inquiry</option>
                                    <option>SEO Audit</option>
                                    <option>Content Strategy</option>
                                    <option>Collaboration</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="button" className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors">
                                Send Message
                            </button>
                        </form>
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
                                        <p className="text-slate-600 dark:text-zinc-400">hello@Garimasterling.com</p>
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
                                {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                                    <a key={social} href="#" className="w-12 h-12 rounded-full border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                                        <span className="sr-only">{social}</span>
                                        {/* Placeholder icon */}
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="2" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
