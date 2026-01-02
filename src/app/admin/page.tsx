import Link from 'next/link';
import dbConnect from '@/lib/db';
import Post, { IPost } from '@/models/Post';
import { deletePost } from '@/actions/post';
import { logout } from '@/actions/auth';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

async function getPosts() {
    await dbConnect();
    const posts = await Post.find({}).sort({ date: -1 }).lean();
    return JSON.parse(JSON.stringify(posts));
}

export default async function AdminPage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-8 pt-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <form action={logout}>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                Sign Out
                            </button>
                        </form>
                        <Link
                            href="/admin/posts/new"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            + New Post
                        </Link>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-xl shadow border border-slate-200 dark:border-zinc-800 overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-zinc-800/50 border-b border-slate-200 dark:border-zinc-800">
                                <th className="p-4 font-semibold text-slate-700 dark:text-zinc-300">Title</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-zinc-300">Author</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-zinc-300">Date</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-zinc-300 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                            {posts.map((post: IPost) => (
                                <tr key={(post._id as unknown) as string} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30 transition-colors">
                                    <td className="p-4 font-medium text-slate-900 dark:text-white">{post.title}</td>
                                    <td className="p-4 text-slate-600 dark:text-zinc-400">{post.author}</td>
                                    <td className="p-4 text-slate-600 dark:text-zinc-400">
                                        {new Date(post.date).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-3">
                                            <Link
                                                href={`/admin/posts/${post._id}`}
                                                className="text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                Edit
                                            </Link>
                                            <form action={deletePost.bind(null, (post._id as unknown) as string)}>
                                                <button
                                                    type="submit"
                                                    className="text-red-600 hover:text-red-800 font-medium"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {posts.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-500">
                                        No posts found. Create one to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
