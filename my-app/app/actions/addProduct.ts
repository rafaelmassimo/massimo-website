'use server';

import Product from '@/models/product.model';
import connectDB from '@/config/database';

interface ProductType {
	productName: string;
	productDescription: string;
	productImages: string[];
	category: string;
}

export default async function AddProduct(product: ProductType) {
	const newCode =
		product.category.slice(0, 4) + Math.floor(10000 + Math.random() * 90000).toString();

	const newProduct = new Product({
		productName: product.productName,
		productDescription: product.productDescription,
		productImages: product.productImages,
		category: product.category,
		productCode: newCode,
	});

	try {
		console.log('Connecting to database');

		await connectDB(); 

		const res = await newProduct.save(); //* Save the new product

		if (res) {
			console.log(res);
			return { success: 'Product added successfully' };
		}
	} catch (error) {
		console.log('Error:', error);
		return { error: 'Failed to add product' }; 
	}
}
