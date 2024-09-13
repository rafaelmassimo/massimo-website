import connectDB from '@/config/database';
import addUser from './actions/addUser';


export default async function Home () {
	
	// const user = addUser('rafael','rafael_massimo@hotmail.com','123456');
	// console.log(user);
	

	return(
		<div>
			<h1>Home</h1>
		</div>
	)
}
