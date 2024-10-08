import React from 'react';
import { DNA } from 'react-loader-spinner';

const DNALoader = ({height = 90, width = 90}: {height?: number, width?: number}) => {
	return (
		<DNA
			height={height}
			width={width}
			ariaLabel="dna-loading"
			wrapperStyle={{}}
			wrapperClass="dna-wrapper"
		/>
	);
};

export default DNALoader;
