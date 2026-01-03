'use server';

import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveImage } from '@/lib/upload';

export async function createPost(formData: FormData) {
    await dbConnect();

    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;
    const seoTitle = formData.get('seoTitle') as string;
    const seoDescription = formData.get('seoDescription') as string;

    const coverImageFile = formData.get('coverImage') as File;
    let coverImage = '';

    if (coverImageFile && coverImageFile.size > 0) {
        coverImage = await saveImage(coverImageFile);
    } else {
        throw new Error('Cover image is required');
    }

    if (!title || !slug || !excerpt || !content || !author) {
        throw new Error('Missing required fields');
    }

    await Post.create({
        title,
        slug,
        excerpt,
        content,
        coverImage,
        author,
        seoTitle,
        seoDescription,
        date: new Date(),
    });

    revalidatePath('/blog');
    revalidatePath('/admin');
    redirect('/admin');
}

export async function updatePost(id: string, formData: FormData) {
    await dbConnect();

    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;
    const seoTitle = formData.get('seoTitle') as string;
    const seoDescription = formData.get('seoDescription') as string;

    const coverImageFile = formData.get('coverImage') as File;
    const existingCoverImage = formData.get('existingCoverImage') as string;

    let coverImage = existingCoverImage;

    if (coverImageFile && coverImageFile.size > 0) {
        coverImage = await saveImage(coverImageFile);
    }

    if (!title || !slug || !excerpt || !content || !coverImage || !author) {
        throw new Error('Missing required fields');
    }

    await Post.findByIdAndUpdate(id, {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        author,
        seoTitle,
        seoDescription,
    });

    revalidatePath('/blog');
    revalidatePath(`/blog/${slug}`);
    revalidatePath('/admin');
    redirect('/admin');
}

export async function deletePost(id: string) {
    await dbConnect();

    await Post.findByIdAndDelete(id);

    revalidatePath('/blog');
    revalidatePath('/admin');
}
