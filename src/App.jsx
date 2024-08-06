import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Preview from './pages/Preview';
import ContextProvider from './context/ContextProvider';

const App = () => {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/preview' element={<Preview />} />
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
};

export default App;
