'use server';

import connectDB from '@/config/database';
import User from '@/models/user.model';

export async function getUserId(userEmail: string) {
	try {
		await connectDB();
		console.log('connected to db to get categories');

		const user = await User.findOne({ email: userEmail });

		if (user) {
			return user._id;
		} else {
			console.log('User not found');
			return null;
		}
	} catch (error) {
		console.log(error);
		return null;
	}
}
