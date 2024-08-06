import React, {useContext, useEffect, useState} from 'react';
import GlobalContext from '../context/GlobalContext';

const Markdown = () => {
	const {bodyMrkdn, setBodyMrkdn, textAreaSize, setTextAreaSize} =
		useContext(GlobalContext);

	const autoExpand = (e) => {
		e.target.style.height = '';
		e.target.style.height =
			Math.min(e.target.scrollHeight, e.target.scrollHeight) + 'px';

		setTextAreaSize(e.target.style.height);
	};

	useEffect(() => {
		console.log(textAreaSize);
		setTextAreaSize(textAreaSize);
		console.log(textAreaSize);
	}, []);

	return (
		<textarea
			style={{height: textAreaSize}}
			value={bodyMrkdn}
			onChange={(e) => setBodyMrkdn(e.target.value)}
			onInput={(e) => autoExpand(e)}
			className={`px-2 py-1 resize-none text-xl placeholder:font-normal outline-none text-gray-800`}
			placeholder='Body'
		/>
	);
};

export default Markdown;
