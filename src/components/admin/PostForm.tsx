'use client';

import { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import Link from 'next/link';

// We can pass the action as a prop or import it. Passing as prop is often cleaner for strict types but imports work too.
// However, since we have two different actions (create/update), passing a bound action or handling it logic here is needed.
// To keep it simple, we'll accept an `action` prop which is the server action function.

interface PostFormProps {
    action: (payload: FormData) => void;
    initialData?: {
        title: string;
        slug: string;
        author: string;
        excerpt: string;
        content: string;
        coverImage: string;
        seoTitle?: string;
        seoDescription?: string;
    };
    submitLabel: string;
}

export default function PostForm({ action, initialData, submitLabel }: PostFormProps) {
    const [content, setContent] = useState(initialData?.content || '');

    return (
        <form action={action} className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow border border-slate-200 dark:border-zinc-800">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    defaultValue={initialData?.title}
                    className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="slug" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                    Slug
                </label>
                <input
                    type="text"
                    name="slug"
                    id="slug"
                    required
                    defaultValue={initialData?.slug}
                    className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="author" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                    Author
                </label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    required
                    defaultValue={initialData?.author}
                    className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="coverImage" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                    Cover Image
                </label>

                {initialData?.coverImage && (
                    <div className="mb-4 relative h-48 w-full md:w-1/2 rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-700">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={initialData.coverImage}
                            alt="Current cover"
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                <input type="hidden" name="existingCoverImage" value={initialData?.coverImage} />

                <input
                    type="file"
                    name="coverImage"
                    id="coverImage"
                    accept="image/*"
                    required={!initialData?.coverImage}
                    className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-zinc-800 dark:file:text-blue-400"
                />
                {!initialData && <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">Upload a cover image</p>}
                {initialData && <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">Leave empty to keep existing image</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="seoTitle" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                        SEO Title (Optional)
                    </label>
                    <input
                        type="text"
                        name="seoTitle"
                        id="seoTitle"
                        defaultValue={initialData?.seoTitle}
                        placeholder="Custom title tag"
                        className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="seoDescription" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                        SEO Description (Optional)
                    </label>
                    <input
                        type="text"
                        name="seoDescription"
                        id="seoDescription"
                        defaultValue={initialData?.seoDescription}
                        placeholder="Custom meta description"
                        className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                    Excerpt
                </label>
                <textarea
                    name="excerpt"
                    id="excerpt"
                    rows={3}
                    required
                    defaultValue={initialData?.excerpt}
                    className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <MarkdownEditor
                label="Content (Markdown)"
                id="content"
                name="content"
                value={content}
                onChange={setContent}
            />

            <div className="flex justify-end gap-4 pt-4">
                <Link
                    href="/admin"
                    className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    );
}
