import connectDB from '@/config/database';


export default async function Home () {
	await connectDB();
	return;
}
