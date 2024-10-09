'use server';

import connectDB from '@/config/database';
import Product from '@/models/product.model';

export async function getOneProductById(id: string) {
    try {
        await connectDB();

        const res = await Product.findById(id).lean();
        if (res) {
            // Convert MongoDB document to plain object
            const plainProduct = JSON.parse(JSON.stringify(res));
            return plainProduct;
        } else {
            return { error: 'Product not found' };
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}