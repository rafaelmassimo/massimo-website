'use server';

import { getServerSession } from 'next-auth';
import options from '../api/auth/[...nextauth]/options';

export async function findUser() {
	const session = await getServerSession(options);
    const userEmail = session?.user.email;

    return userEmail;
}
