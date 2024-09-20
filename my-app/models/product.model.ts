import mongoose, { Model, Schema, Types, model } from 'mongoose';

export type productType = {
	owner: Types.ObjectId;
	id?: Types.ObjectId;
	productName: string;
	productDescription: string;
	productCode?: string;
	productImages?: string[];
	category: string;
};

type timestamps = {
	createdAt: string;
	updatedAt: string;
};

export type ProductModel = Model<productType & timestamps>;

const ProductSchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: [true, 'The owner job is required'],
		},
		productName: {
			type: String,
			required: [true, 'Product Name is required'],
		},
		productDescription: {
			type: String,
			required: [true, 'Product Description is required'],
		},
		productCode: {
			type: String,
			required: [true, 'Product Code is required'],
		},
		category: {
			type: String,
			required: [true, 'Category is required'],
		},
		productImages: {
			type: [String],
			validate: {
				validator: (v: string[]) => v.length <= 5,
				message: (props: { value: any }) =>
					`Você deve enviar no máximo 5 imagens, você enviou ${props.value.length}`,
			},
		},
	},
	{
		timestamps: true,
	},
);

const Product = model<productType, ProductModel>('Product', ProductSchema);

export default Product;
