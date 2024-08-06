import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({text, path, left}) => {
	return (
		<Link
			to={path}
			className={`${
				left ? 'self-start' : 'self-end'
			} mb-2 bg-yellow-400 hover:bg-yellow-400/60 active:scale-95 transition-transform px-4 rounded-md text-lg text-gray-800`}>
			{text}
		</Link>
	);
};

export default Button;
