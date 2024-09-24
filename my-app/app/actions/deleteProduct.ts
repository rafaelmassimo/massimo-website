'use server';

import cloudinary from '@/config/cloudinary';
import connectDB from '@/config/database';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import options from '../api/auth/[...nextauth]/options';
import User from '@/models/user.model';
import Product from '@/models/product.model';

async function deleteProduct(productId: string, owner: string) {
	const session = await getServerSession(options);

	if (!session) {
		return { error: 'You need to be signed in to add a product' };
	}

	await connectDB();

	const product = await Product.findById(productId);

	if (!product) throw new Error('Product Not Found');

	// Verify ownership
	if (product?.owner?.toString() !== owner) {
        throw new Error('You are not the owner of this product');
    }

	// extract public id's from image url in DB
	const publicIds = product.productImages.map((imageUrl:any) => {
		const parts = imageUrl.split('/');
		return parts.at(-1).split('.').at(0);
	});

	// Delete images from Cloudinary
	if (publicIds.length > 0) {
		for (let publicId of publicIds) {
			await cloudinary.uploader.destroy('massimo_massimo/' + publicId);
		}
	}

	// Proceed with property deletion
	await Product.deleteOne();

	revalidatePath('/products', 'page');
}

export default deleteProduct;
