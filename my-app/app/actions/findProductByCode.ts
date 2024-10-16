'use server';

import connectDB from '@/config/database';
import Product from '@/models/product.model';

export async function findProductByCode(code: string) {
	try {
		await connectDB();

		const res = await Product.findOne({ productCode: { $regex: new RegExp(`^${code}$`, 'i') } }).lean();
		if (res) {
			// Convert MongoDB document to plain object
			const plainProduct = JSON.parse(JSON.stringify(res));
			return plainProduct;
		}

		return { error: 'Product not found' };
	} catch (error) {
		console.log(error);
		return null;
	}
}
