import React from 'react';
import { getServerSession } from 'next-auth';
import options from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const AddProductPage = async () => {
	const session = await getServerSession(options);

	//Here you can protect the page by checking if the session is not available!!
	//Here you can protect the server side pages

	console.log('Session:', session);

	return (
		<div>
			<h1 className="text-success">Member Server Page</h1>
			<p className="text-primary">{session?.user?.email}</p>
			<p className="text-primary">{session?.user?.role}</p>
			<p className="text-primary">{session?.user?.name}</p>
			<Link className="text-warning" href="/api/auth/signout?callbackUrl=/&redirect=false">
				get out
			</Link>

		</div>
	);
};

export default AddProductPage;
