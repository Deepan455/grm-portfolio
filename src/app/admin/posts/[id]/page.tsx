import { updatePost } from '@/actions/post';
import PostForm from '@/components/admin/PostForm';
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

                <PostForm
                    action={updatePostWithId}
                    initialData={post}
                    submitLabel="Update Post"
                />
            </div>
        </div>
    );
}
