import React, {useContext} from 'react';
import Markdown from './Markdown';
import Link from './Link';
import GlobalContext from '../context/GlobalContext';

const Body = () => {
	const {title, setTitle} = useContext(GlobalContext);

	return (
		<form className='border-x border-gray-200 min-h-screen w-[52rem] px-12 pt-14 flex flex-col gap-2'>
			<Link path='/preview' text='👁️ Preview' />
			<textarea
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='text-4xl font-semibold outline-none text-gray-800 placeholder:text-gray-400 font-serif overflow-hidden resize-none px-2'
				rows='2'
				placeholder='Title'
			/>
			<Markdown />
		</form>
	);
};

export default Body;
