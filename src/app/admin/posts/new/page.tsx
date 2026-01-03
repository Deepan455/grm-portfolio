import { createPost } from '@/actions/post';
import PostForm from '@/components/admin/PostForm';

export default function NewPostPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Create New Post</h1>

                <PostForm
                    action={createPost}
                    submitLabel="Create Post"
                />
            </div>
        </div>
    );
}
