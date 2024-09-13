
import connectDB from '@/config/database';
import addUser from './actions/addUser';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default async function Home() {
	const user = await addUser('rafael', 'rafael_massimo@hotmail.com', '123456');
	console.log(user);

	return (
		<div>
			{/* <div>

			<button
			onClick={() => signIn()}>SignIn</button>
			</div> */}
			<div>

			<Link href={'/add-product'}>go to add product</Link>
			</div>

			<div>

			<Link href="/api/auth/signin">get in</Link>
			</div>
		</div>
	);
}
