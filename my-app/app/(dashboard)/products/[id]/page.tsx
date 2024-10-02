'use client';
import SearchedProductByCategory from '@/app/components/SearchedProductByCategory';
import { useParams } from 'next/navigation';
import React, { Suspense } from 'react';

const SearchResult = () => {
	const {id: category} = useParams();
	return (
		<Suspense>
			<SearchedProductByCategory category={category as unknown as string} />
		</Suspense>
	);
};

export default SearchResult;
