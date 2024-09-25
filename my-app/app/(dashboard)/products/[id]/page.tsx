'use client';
import SearchProduct from '@/app/components/SearchProduct';
import { useParams } from 'next/navigation';
import React, { Suspense } from 'react';

const SearchResult = () => {
	const {id: category} = useParams();
	return (
		<Suspense>
			<SearchProduct category={category as unknown as string} />
		</Suspense>
	);
};

export default SearchResult;
