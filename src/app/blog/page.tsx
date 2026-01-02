import Link from 'next/link';
import Image from 'next/image';
import dbConnect from '@/lib/db';
import Post, { IPost } from '@/models/Post';

export const metadata = {
    title: "Blog | Garima Bhandari",
    description: "Insights on SEO, content strategy, and digital growth.",
};

// Force dynamic rendering since we are fetching from DB
export const dynamic = 'force-dynamic';

async function getPosts() {
    await dbConnect();
    // Using lean() for better performance as we just need plain JS objects
    // We need to ensure we have a valid result and default to empty array if something goes wrong
    try {
        const posts = await Post.find({}).sort({ date: -1 }).lean();
        return JSON.parse(JSON.stringify(posts)); // Serializable for Server Components
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300 pt-32 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-6 tracking-tight">
                        Latest Insights
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Thoughts, strategies, and guides to help you navigate the digital landscape.
                    </p>
                </header>

                {posts.length === 0 ? (
                    <div className="text-center py-20 bg-slate-50 dark:bg-zinc-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-zinc-800">
                        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">No posts found yet</h2>
                        <p className="text-slate-600 dark:text-zinc-400 mb-8">
                            We are currently migrating our content. Check back soon!
                        </p>
                        <div className="text-sm text-muted-foreground">
                            (Seed the database at <Link href="/api/seed" className="text-blue-500 hover:underline">/api/seed</Link>)
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: IPost) => (
                            <article
                                key={post._id as string}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                            >
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>

                                <div className="flex flex-col flex-grow p-6">
                                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                                        <time dateTime={new Date(post.date).toISOString()} className="flex items-center">
                                            <span className="mr-2">📅</span>
                                            {new Date(post.date).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </time>
                                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                                        <span className="flex items-center">
                                            <span className="mr-1">✍️</span> {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-sm font-medium text-blue-600 group-hover:text-blue-700">
                                        <span>Read Article</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
