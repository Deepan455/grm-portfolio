'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'Genz@2000'; // In a real app, use environment variables
const SESSION_COOKIE_NAME = 'admin_session';

export async function login(prevState: any, formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        (await cookies()).set(SESSION_COOKIE_NAME, 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
        });
        redirect('/admin');
    }

    return { error: 'Invalid credentials' };
}

export async function logout() {
    (await cookies()).delete(SESSION_COOKIE_NAME);
    redirect('/admin/login');
}
