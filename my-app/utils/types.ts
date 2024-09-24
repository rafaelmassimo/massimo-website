import mongoose, { Model, Schema, Types } from 'mongoose';

export type UserTypeImported = {
	_id: Types.ObjectId;
	email: string;
	password: string | undefined;
	role?: string;
};

export type EditProductType = {
    owner: string | Types.ObjectId;
    productId: string | Types.ObjectId;
    productName: string;
    productDescription: string;
    category: string;
    productImages: string[];
};