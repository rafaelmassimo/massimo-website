import mongoose, { Model, Schema, Types, model } from 'mongoose';

export type productType = {
	id: Types.ObjectId;
	productName: string;
    productDescription: string;
    productCode: number;
    productImages?:[string];
    category: string;
};

type timestamps = {
	createdAt: string;
	updatedAt: string;
};

export type UserModel = Model<productType & timestamps>;

const ProductSchema = new Schema(
	{
		productName: {
            type: String,
            required: [true, 'Product Name is required'],
        },
        productDescription: {
            type: String,
            required: [true, 'Product Description is required'],
        },
        productCode: {
            type: Number,
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
                message: (props: { value: any }) => `Você deve enviar no máximo 5 imagens, você enviou ${props.value.length}`,
            }
        }
	},
	{
		timestamps: true,
	},
);

const Product: Model<productType> = mongoose.models.Product || mongoose.model<productType>('Product', ProductSchema);

export default Product;
