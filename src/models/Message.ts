import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMessage extends Document {
    firstName: string;
    lastName?: string;
    email: string;
    subject?: string;
    message: string;
    createdAt: Date;
    read: boolean;
}

const MessageSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    subject: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    read: {
        type: Boolean,
        default: false,
    },
});

const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);

export default Message;
