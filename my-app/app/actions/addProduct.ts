'use server';

import Product from '@/models/product.model';
import connectDB from '@/config/database';
import { redirect } from 'next/navigation';

interface ProductType {
	productName: string;
	productDescription: string;
	productImages?: any;
	category: string;
}

export default async function addProduct(userData: ProductType) {
	// Generate a random code for the product
	const newCode =
		userData.category.slice(0, 4) + Math.floor(10000 + Math.random() * 90000).toString();

	const newProduct = new Product({
		productName: userData.productName,
		productDescription: userData.productDescription,
		productImages: userData.productImages,
		category: userData.category,
		productCode: newCode,
	});

	try {
		console.log('Connecting to database');

		await connectDB();

		const res = await newProduct.save(); //* Save the new product

		if (res) {
			return { success: 'Product added successfully' };
		}
		
	} catch (error) {
		console.log('Error:', error);
		return { error: 'Failed to add product' };
	}
}
