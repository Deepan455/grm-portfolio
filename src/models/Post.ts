import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPost extends Document {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    date: Date;
    author: string;
    seoTitle?: string;
    seoDescription?: string;
}

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this post.'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Please provide a slug for this post.'],
        unique: true,
        index: true,
    },
    excerpt: {
        type: String,
        required: [true, 'Please provide an excerpt for this post.'],
        maxlength: [200, 'Excerpt cannot be more than 200 characters'],
    },
    content: {
        type: String,
        required: [true, 'Please provide content for this post.'],
    },
    coverImage: {
        type: String,
        required: [true, 'Please provide a cover image URL for this post.'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        required: [true, 'Please provide an author for this post.'],
    },
    seoTitle: {
        type: String,
        required: false,
        maxlength: [60, 'SEO Title cannot be more than 60 characters'],
    },
    seoDescription: {
        type: String,
        required: false,
        maxlength: [160, 'SEO Description cannot be more than 160 characters'],
    },
});

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;
