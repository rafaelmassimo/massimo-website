import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
	const [error, setError] = useState('');

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const email = (event.currentTarget as HTMLFormElement).email.value;
		const password = (event.currentTarget as HTMLFormElement).password.value;

		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});

		if (res?.error) {
			setError(res.error); // Display the error message from the backend
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900">
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
				{error && (
					<div className="bg-red-500 text-white p-3 rounded mb-4">
						<p>
							{error === 'CredentialsSignin'
								? 'Sign in failed. Check the details you provided are correct.'
								: error}
						</p>
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-400 mb-1">
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="your email"
							className="w-full px-3 py-2 bg-gray-700 text-white rounded"
							required
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-gray-400 mb-1">
							Password
						</label>
						<input
							type="password"
							name="password"
							placeholder="your password"
							className="w-full px-3 py-2 bg-gray-700 text-white rounded"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
					>
						Sign in with Credentials
					</button>
				</form>
			</div>
		</div>
	);
}
