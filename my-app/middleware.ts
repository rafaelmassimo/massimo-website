import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

// export default withAuth(function middleware(req) {
// 	console.log(req.nextUrl.pathname); //This is for check the path of the page
// 	console.log(req.nextauth?.token?.role);// This is for check the role of the user that we added on the options.ts
    
//     //Here I'm saying if the user is trying to access a path which start with /CreateUser and its role is not Admin then it's going to be redirected to the Denied page (you need to create it first)
//     if(req.nextUrl.pathname.startsWith("/add-product") && req.nextauth?.token?.role !== "ADMIN"){
//         return NextResponse.rewrite(new URL ("/Denied", req.url))
//     }
    
// });
//But here you can decide which pages you want to protect
export const config = { matcher: ['/add-product'] };