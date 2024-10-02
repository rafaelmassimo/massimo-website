'use server';

import connectDB from '@/config/database';
import Product from '@/models/product.model';

export async function findProductByCode(code: string) {
    try {
        await connectDB();

        const res = await Product.findOne({productCode: code}).lean();
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