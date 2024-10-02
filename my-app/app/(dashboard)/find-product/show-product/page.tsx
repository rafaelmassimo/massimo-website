'use client';

import SearchedProductByCode from '@/app/components/SearchedProductByCode';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const ShowProductPage = () => {
	const searchParams = useSearchParams();


	return (
		<Suspense>
			<SearchedProductByCode code={searchParams.get('productCode') as unknown as string} />
		</Suspense>
	);
};

export default ShowProductPage;
