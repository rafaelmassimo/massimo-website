import FindProductForm from '@/app/components/FindProductForm';
import React from 'react';

const FindProductPage = () => {
	return (
		<section className="h-screen bg-base-100">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-lg border m-4 md:m-0">
					<FindProductForm />
				</div>
			</div>
		</section>
	);
};

export default FindProductPage;
