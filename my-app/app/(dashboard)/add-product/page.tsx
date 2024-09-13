import React from 'react';
import { getServerSession } from 'next-auth';
import options from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

getServerSession(options);

const AddProductPage = async () => {
	const session = await getServerSession(options);
	
	//Here you can protect the page by checking if the session is not available!!
	//Here you can protect the server side pages
	
	console.log('Session:', session);
	
	return (
		<div>
			<h1>Member Server Page</h1>
			<p>{session?.user?.email}</p>
			<p>{session?.user?.role}</p>
			<p>{session?.user?.name}</p>
			<Link href="/api/auth/signout?callbackUrl=/&redirect=false">get out</Link>
				
		</div>
	);
};

export default AddProductPage;
