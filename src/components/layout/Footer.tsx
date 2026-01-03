export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 mt-auto transition-colors duration-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <a href="https://www.linkedin.com/in/garima-bhandari-886349246/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-500 dark:hover:text-zinc-400">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-slate-400 dark:text-zinc-500">
                        &copy; {new Date().getFullYear()} Garima Bhandari. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
