'use server';

import cloudinary from '@/config/cloudinary';
import connectDB from '@/config/database';
import { getServerSession } from 'next-auth';
import options from '../api/auth/[...nextauth]/options';
import User from '@/models/user.model';
import Product from '@/models/product.model';

async function deleteProduct(productId: string, owner: string) {
	
	const session = await getServerSession(options);
	
	if (!session) {
		return { error: 'You need to be signed in to add a product' };
	}
	
	try {
		await connectDB();
		
		console.log('Connected to deleteProduct');
		const product = await Product.findById(productId);

		if (!product) throw new Error('Product Not Found');

		// Verify ownership
		const verifyUser = await User.findOne({ email: session.user.email });
		if (verifyUser?._id.toString() !== owner) {
			throw new Error('Você não tem permissão para eliminar este produto');
		}

		// extract public id's from image url in DB
		const publicIds = product.productImages.map((imageUrl: any) => {
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
		const res = await Product.deleteOne({ _id: productId });
		if (res.deletedCount === 1) {
			return { message: 'Produto Eliminado com Sucesso', status: 200 };
		}
	} catch (error) {
		console.error('Error deleting product:', error);
		return { message: (error as Error).message , status: 500};
	}
}

export default deleteProduct;
