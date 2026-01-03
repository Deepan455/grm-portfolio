'use server';

import dbConnect from '@/lib/db';
import Message from '@/models/Message';
import { sendEmail } from '@/lib/email';

export async function submitContactForm(prevState: any, formData: FormData) {
    await dbConnect();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Basic validation
    if (!firstName || !email || !message) {
        return { error: 'Please fill in all required fields.' };
    }

    try {
        await Message.create({
            firstName,
            lastName,
            email,
            subject,
            message,
        });

        // Send email notification
        // We only attempt to send if EMAIL_USER is configured to avoid errors in dev if not set
        if (process.env.EMAIL_USER) {
            await sendEmail({
                to: process.env.EMAIL_USER, // Send to yourself
                subject: `New Contact Form: ${subject || 'No Subject'}`,
                text: `
Name: ${firstName} ${lastName || ''}
Email: ${email}
Subject: ${subject}

Message:
${message}
                `,
            });
        }

        return { success: 'Thank you! Your message has been sent successfully.' };
    } catch (error) {
        console.error('Contact form submission error:', error);
        return { error: 'Something went wrong. Please try again later.' };
    }
}
