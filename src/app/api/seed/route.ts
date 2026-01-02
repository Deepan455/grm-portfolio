import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function GET() {
    try {
        await dbConnect();

        // Clear existing posts
        await Post.deleteMany({});

        const samplePosts = [
            {
                title: 'Getting Started with Next.js 16',
                slug: 'getting-started-with-nextjs-16',
                excerpt: 'Next.js 16 introduces amazing features like TurboPack and Server Actions.',
                content: '# Getting Started with Next.js 16\n\nNext.js 16 is here, and it is faster than ever...',
                coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
                date: new Date(),
                author: 'Alex Sterling',
            },
            {
                title: 'Why MongoDB is Great for Portfolios',
                slug: 'mongodb-for-portfolios',
                excerpt: 'Flexible schema and easy scaling make MongoDB a top choice for portfolio sites.',
                content: '# Why MongoDB?\n\nMongoDB offers a document-oriented approach that is perfect for content...',
                coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
                date: new Date(),
                author: 'Alex Sterling',
            },
            {
                title: 'Mastering TypeScript in 2025',
                slug: 'mastering-typescript-2025',
                excerpt: 'TypeScript continues to dominate. Here are the latest tips and tricks.',
                content: '# TypeScript Tips\n\nTypeScript helps catch errors early and improves code quality...',
                coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
                date: new Date(),
                author: 'Alex Sterling',
            },
        ];

        await Post.insertMany(samplePosts);

        return NextResponse.json({ message: 'Database seeded successfully', posts: samplePosts });
    } catch (error) {
        console.error('Seeding error:', error);
        return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
    }
}
