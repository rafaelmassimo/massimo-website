'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

const ShowProductPage = () => {
	const searchParams = useSearchParams();
	return <div>{searchParams.get('productCode')}</div>;
};

export default ShowProductPage;
