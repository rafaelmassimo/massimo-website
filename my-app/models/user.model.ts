import mongoose, { Model, Schema, Types, model } from 'mongoose';

export type UserType = {
	id: Types.ObjectId;
	email: string;
	username: string;
	password: string;
    role?: string;
};

type timestamps = {
	createdAt: string;
	updatedAt: string;
};

export type UserModel = Model<UserType & timestamps>;

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, 'Email already Exists'],
			required: [true, 'Email is required'],
		},
		password: { type: String, required: false },
		username: {
			type: String,
			required: [true, 'Username is required'],
		},
        role:{
            type: String,
			default: "ADMIN"
        }
	},
	{
		timestamps: true,
	},
);

const User: Model<UserType> = mongoose.models.User || mongoose.model<UserType>('User', UserSchema);

export default User;
