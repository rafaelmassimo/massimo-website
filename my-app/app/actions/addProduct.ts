'use server';

import Product from '@/models/product.model';
import connectDB from '@/config/database';
import cloudinary from '@/config/cloudinary';
import { getServerSession } from 'next-auth';
import User from '@/models/user.model';
import options from '../api/auth/[...nextauth]/options';


interface ProductType {
	productName: string;
	productDescription: string;
	productImages?: any;
	category: string;
}

export async function addProduct(userData: ProductType) {
	const session = await getServerSession(options);
	
	if (!session) {
		return { error: 'You need to be signed in to add a product' };
	}

	try {
		const user = await User.findOne({ email: session.user.email });

		// Generate a random code for the product
		const newCode =
			userData.category.slice(0, 4) + Math.floor(10000 + Math.random() * 90000).toString();

		// Upload the images to Cloudinary
		const imagesUploadPromises: Promise<string>[] = [];
		for (const image of userData.productImages) {
			const uploadPromise = cloudinary.uploader
				.upload(`${image.image}`, {
					folder: 'massimo_massimo',
				})
				.then((result) => result.secure_url);
			imagesUploadPromises.push(uploadPromise);
		}
		const uploadedImages = await Promise.all(imagesUploadPromises);

		const newProduct = new Product({
			owner: user?._id,
			productName: userData.productName,
			productDescription: userData.productDescription,
			productImages: uploadedImages,
			category: userData.category,
			productCode: newCode,
		});

		console.log('Connecting to database');

		await connectDB();

		const res = await newProduct.save(); //* Save the new product

		if (res) {
			return { success: 'Product added successfully' };
		}
	} catch (error) {
		console.error('Error adding product:', error);
		return { error: 'Error adding product' };
	}
}
