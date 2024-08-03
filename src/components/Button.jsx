import React from 'react';

const Button = ({text, type}) => {
	return (
		<button
			className='mb-2 bg-yellow-400 hover:bg-yellow-400/60 active:scale-95 transition-transform self-end px-4 rounded-md text-lg text-gray-800'
			type={type}>
			{text}
		</button>
	);
};

export default Button;
