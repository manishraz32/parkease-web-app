import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl; 
    
     // ✅ Get role safely from cookies
     const roleCookie = request.cookies.get('role')?.value;
     console.log("roleCookie",  roleCookie);
     let role = null;
     try {
         role = roleCookie ? JSON.parse(roleCookie)?.role : null; 
         console.log("role", role)
     } catch (error) {
         console.error("Error parsing role cookie:", error);
     }

    if (!role) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (role === 'admin' && !url.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }
    if (role === 'parking-owner' && !url.pathname.startsWith('/parking-owner')) {
        return NextResponse.redirect(new URL('/parking-owner', request.url));
    }
    if (role === 'user' && !url.pathname.startsWith('/findparking')) {
        return NextResponse.redirect(new URL('/findparking', request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/admin/:path*','/parking-owner/:path*', '/findparking/:path*'], 
};

//'/parking-owner/:path*'