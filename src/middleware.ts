import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define paths that require authentication
    const isProtectedPath = path.startsWith('/admin');
    const isLoginPath = path === '/admin/login';

    if (isProtectedPath && !isLoginPath) {
        const hasSession = request.cookies.has('admin_session');

        if (!hasSession) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    if (isLoginPath) {
        const hasSession = request.cookies.has('admin_session');
        if (hasSession) {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
