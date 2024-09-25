import { findUser } from './findUser';
import { getUserId } from '../app/actions/getUserId';

export function convertToSerializeableObject(leanDocument: any) {
	for (const key of Object.keys(leanDocument)) {
		if (leanDocument[key].toJSON && leanDocument[key].toString)
			leanDocument[key] = leanDocument[key].toString();
	}
	return leanDocument;
}

export const findUserId = async () => {
	try {
		const res = await findUser();
		const userId = await getUserId(res);
		return userId;
	} catch (error) {
		console.error(error);
		return null;
	}
};
