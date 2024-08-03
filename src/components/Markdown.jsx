import React from 'react';

const Markdown = () => {
	const autoExpand = (e) => {
		e.target.style.height = '';
		e.target.style.height =
			Math.min(e.target.scrollHeight, e.target.scrollHeight) + 'px';
	};

	return (
		<textarea
			onInput={(e) => autoExpand(e)}
			className={`px-2 py-1 resize-none text-xl placeholder:font-normal outline-none text-gray-800`}
			placeholder='Body'
		/>
	);
};

export default Markdown;
