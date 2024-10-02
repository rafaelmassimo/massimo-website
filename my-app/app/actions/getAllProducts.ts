'use server';

import connectDB from '@/config/database';
import Product from '@/models/product.model';

export async function getAllProducts() {
	try {
		await connectDB();

		const res = await Product.find({});

		if (res) {
			// Convert MongoDB document to plain object
			const plainProduct = JSON.parse(JSON.stringify(res));
			return plainProduct;
		}
	} catch (error) {
		console.log(error);
		return null;
	}
}



