import React, { createContext, useState } from 'react';
export const NamesContext = createContext();

export const NamesProvider = (props) => {
	const [names, setNames] = useState();

	return (
		<NamesContext.Provider value={[names, setNames]}>
			{props.children}
		</NamesContext.Provider>
	);
};
