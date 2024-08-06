import React, {useState} from 'react';
import GlobalContext from './GlobalContext';

const ContextProvider = ({children}) => {
	const [bodyMrkdn, setBodyMrkdn] = useState('');
	const [title, setTitle] = useState('');
	const [textAreaSize, setTextAreaSize] = useState('');

	return (
		<GlobalContext.Provider
			value={{
				bodyMrkdn,
				setBodyMrkdn,
				title,
				setTitle,
				textAreaSize,
				setTextAreaSize,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
