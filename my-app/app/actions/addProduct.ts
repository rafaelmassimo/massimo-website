'use server';

import Product from '@/models/product.model';
import connectDB from '@/config/database';

interface ProductType {
	productName: string;
	productDescription: string;
	productImages?: any[];
	category: string;
}

export default async function addProduct(FormData: FormData, images: File[]) {
	const productFromForm: ProductType = {
		productName: FormData.get('productName') as string,
		productDescription: FormData.get('productDescription') as string,
		category: FormData.get('category') as string,
	};

	const newCode = productFromForm.category.slice(0, 4) + Math.floor(10000 + Math.random() * 90000).toString();

	const newProduct = new Product({
		productName: productFromForm.productName,
		productDescription: productFromForm.productDescription,
		productImages: images,
		category: productFromForm.category,
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
