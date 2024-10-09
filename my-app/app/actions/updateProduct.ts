'use server';

import connectDB from '@/config/database';
import Product, { productType } from '@/models/product.model';

export async function updateProduct(productId: string, owner: string, productData: productType) {
	try {
		await connectDB();

		const checkOwner = await Product.findOne({ _id: productId });

		if (checkOwner?.owner?.toString() !== owner) {
			throw new Error('You are not the owner of this product');
		}

		const newProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });

        if (!newProduct) {
            throw new Error('Product not found');
        } else {
            return { success: 'Produto Atualizado com Sucesso' };
        }
	} catch (error) {
		console.error('Error updating product:', error);
		return { error: error };
	}
}
