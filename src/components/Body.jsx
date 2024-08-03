import React from 'react';
import Markdown from './Markdown';
import Button from './Button';

const Body = () => {
	return (
		<form className='border-x border-gray-200 min-h-screen w-[52rem] px-12 pt-14 flex flex-col gap-2'>
			<Button text='Preview' type='submit' />
			<textarea
				className='text-4xl font-semibold outline-none text-gray-800 placeholder:text-gray-400 font-serif overflow-hidden resize-none px-2'
				rows='2'
				placeholder='Title'
			/>
			<Markdown />
		</form>
	);
};

export default Body;
