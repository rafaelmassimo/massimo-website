import React from 'react';
import { DNA } from 'react-loader-spinner';

const DNALoader = () => {
	return (
		<DNA
			height="90"
			width="90"
			ariaLabel="dna-loading"
			wrapperStyle={{}}
			wrapperClass="dna-wrapper"
		/>
	);
};

export default DNALoader;
