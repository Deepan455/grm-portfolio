import { updatePost } from '@/actions/post';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ id: string }>;
}

async function getPost(id: string) {
    await dbConnect();
    const post = await Post.findById(id).lean();
    if (!post) return null;
    return JSON.parse(JSON.stringify(post));
}

export default async function EditPostPage(props: Props) {
    const params = await props.params;
    const post = await getPost(params.id);

    if (!post) {
        notFound();
    }

    const updatePostWithId = updatePost.bind(null, post._id);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Edit Post</h1>

                <form action={updatePostWithId} className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow border border-slate-200 dark:border-zinc-800">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            defaultValue={post.title}
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
                            defaultValue={post.slug}
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
                            defaultValue={post.author}
                            className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="coverImage" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                            Cover Image URL
                        </label>
                        <input
                            type="url"
                            name="coverImage"
                            id="coverImage"
                            required
                            defaultValue={post.coverImage}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
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
                                defaultValue={post.seoTitle || ''}
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
                                defaultValue={post.seoDescription || ''}
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
                            defaultValue={post.excerpt}
                            className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                            Content (Markdown)
                        </label>
                        <textarea
                            name="content"
                            id="content"
                            rows={15}
                            required
                            defaultValue={post.content}
                            className="w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-2 text-slate-900 dark:text-white font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <a
                            href="/admin"
                            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                        >
                            Cancel
                        </a>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                            Update Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
