import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // or use 'host' and 'port' for other providers
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

interface SendEmailParams {
    to: string;
    subject: string;
    text: string;
    html?: string;
}

export async function sendEmail({ to, subject, text, html }: SendEmailParams) {
    try {
        await transporter.verify();
    } catch (error) {
        console.error('Email transporter configuration error:', error);
        // Don't throw here if you want to allow form submission even if email fails, 
        // but typically you want to know.
        return false;
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html,
        });
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
