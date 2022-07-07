import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';
import { AboutPage, DonatePage, HomePage } from './pages';
import { NamesProvider } from './context/nameContext';

const App = () => {
	return (
		<>
			<NamesProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/' element={<HomePage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/donate' element={<DonatePage />} />
					</Route>
				</Routes>
			</NamesProvider>
		</>
	);
};

export default App;
