// 'use server';

// import cloudinary from '@/config/cloudinary';
// import connectDB from '@/config/database';
// import { getServerSession } from 'next-auth';
// import { revalidatePath } from 'next/cache';
// import options from '../api/auth/[...nextauth]/options';
// import User from '@/models/user.model';

// async function deleteProduct(productId: string) {
// 	const session = await getServerSession(options);

// 	if (!session) {
// 		return { error: 'You need to be signed in to add a product' };
// 	}

// 	await connectDB();

// 	const property = await Property.findById(propertyId);

// 	if (!property) throw new Error('Property Not Found');

// 	// Verify ownership
// 	if (property.owner.toString() !== userId) {
// 		throw new Error('Unauthorized');
// 	}

// 	// extract public id's from image url in DB
// 	const publicIds = property.images.map((imageUrl) => {
// 		const parts = imageUrl.split('/');
// 		return parts.at(-1).split('.').at(0);
// 	});

// 	// Delete images from Cloudinary
// 	if (publicIds.length > 0) {
// 		for (let publicId of publicIds) {
// 			await cloudinary.uploader.destroy('propertypulse/' + publicId);
// 		}
// 	}

// 	// Proceed with property deletion
// 	await property.deleteOne();

// 	// Revalidate the cache
// 	// NOTE: since properties are pretty much on every page, we can simply
// 	// revalidate everything that uses our top level layout
// 	revalidatePath('/', 'layout');
// }

// export default deleteProduct;
