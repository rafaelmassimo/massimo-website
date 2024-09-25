'use server';

import connectDB from '@/config/database';
import Product from '@/models/product.model';

export async function getAllCategories(userId: string) {
	//*this assure that we get unique categories
	let categories = new Set<string>();

	try {
		await connectDB();
		console.log('connected to db to get categories');

		const res = await Product.find({ owner: userId });

		if (res) {
			res.forEach((product) => {
				categories.add(product.category);
			});
		}

		return Array.from(categories);
	} catch (error) {
		console.log(error);
		return null;
	}
}
