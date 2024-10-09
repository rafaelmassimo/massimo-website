import addUser from './actions/addUser';
import Link from 'next/link';


export default async function Home() {
	const user = await addUser('rafael', 'rafael_massimo@hotmail.com', '123456');

	return (
		<>
			<div>
				
				<div>
					<Link href={'/add-product'}>go to add product</Link>
				</div>

				<div>
					<Link href="/api/auth/signin">get in</Link>
				</div>
				<div>
					<Link href="/products">Products</Link>
				</div>
			</div>

		</>
	);
}
