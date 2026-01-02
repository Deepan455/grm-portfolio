export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 mt-auto transition-colors duration-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {/* Placeholder for social links */}
                    <span className="text-slate-400 dark:text-zinc-500 text-sm">Social Links Placeholder</span>
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
