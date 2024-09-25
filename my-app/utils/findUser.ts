'use server';

import options from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function findUser() {
	const session = await getServerSession(options);
	const userEmail = session?.user.email;

	return userEmail;
}
