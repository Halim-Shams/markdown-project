import React, {useContext} from 'react';
import Link from '../components/Link';
import ReactMarkdown from 'react-markdown';
import GlobalContext from '../context/GlobalContext';

const Preview = () => {
	const {bodyMrkdn, title} = useContext(GlobalContext);
	return (
		<div className='flex items-center justify-center'>
			<div className='border-x border-gray-200 min-h-screen w-[52rem] px-12 pt-14 flex flex-col gap-6'>
				<Link path='/' text='⬅️ Back' left />
				<p className='text-5xl font-semibold text-gray-800 font-serif px-2'>
					{title}
				</p>
				<div className='prose prose-lg'>
					<ReactMarkdown>{bodyMrkdn}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default Preview;
