'use server';

import connectDB from '@/config/database';
import Product from '@/models/product.model';

export default async function filterProductByCategory(query: string) {
	try {
        await connectDB();

        const products = await Product.find({
            category: query,
        });

        if (products && products.length > 0) {
            const plainProducts = JSON.parse(JSON.stringify(products));
            return plainProducts;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
