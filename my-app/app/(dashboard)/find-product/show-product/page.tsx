
import React, { Suspense } from 'react';
import ShowPageComponent from '@/app/components/ShowPageComponent';

const ShowProductPage = () => {
	return (
		<Suspense>
			<ShowPageComponent />
		</Suspense>
	);
};

export default ShowProductPage;
