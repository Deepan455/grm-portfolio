import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import dbConnect from "@/lib/db";
import Post, { IPost } from "@/models/Post";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    await dbConnect();
    const post = await Post.findOne({ slug }).select('title excerpt seoTitle seoDescription').lean();

    if (!post) {
        return {
            title: 'Post Not Found | Garima Bhandari',
        };
    }

    return {
        title: post.seoTitle || `${post.title} | Garima Bhandari`,
        description: post.seoDescription || post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    await dbConnect();

    const post = await Post.findOne({ slug }).lean() as IPost | null;

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-24 transition-colors duration-300">
            {/* Progress bar could go here */}

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-12 group"
                >
                    <svg
                        className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Articles
                </Link>

                <header className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-zinc-500 mb-6">
                        <time dateTime={new Date(post.date).toISOString()} className="flex items-center">
                            <span className="mr-2">📅</span>
                            {new Date(post.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-zinc-700"></span>
                        <span className="flex items-center">
                            <span className="mr-2">✍️</span>
                            {post.author}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    {post.coverImage && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl mt-8">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />
                        </div>
                    )}
                </header>

                {/* 
                      Using react-markdown to render markdown content safely and correctly.
                      remark-gfm adds support for GitHub Flavored Markdown (tables, strikethrough, etc.)
                    */}
                <div className="prose prose-lg dark:prose-invert prose-slate mx-auto max-w-none
                        prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                        prose-p:text-slate-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed
                        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-lg
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-zinc-900/50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                        marker:text-blue-500 dark:marker:text-blue-400">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                <hr className="my-16 border-slate-200 dark:border-zinc-800" />

                {/* Author Bio or Footer could go here */}
            </div>
        </article>
    );
}
