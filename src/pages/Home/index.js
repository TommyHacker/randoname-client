import React, { useState, useContext } from 'react';
import './main.css';
const randomName = require('randoname');
import { NamesContext } from '../../context/nameContext';

const HomePage = () => {
	const [names, setNames] = useContext(NamesContext);
	const [many, setMany] = useState(1);

	const clickHandler = () => {
		try {
			let tempArr = [];
			for (let i = 0; i < many; i++) {
				const name = randomName();
				tempArr.push(name);
			}
			return setNames(tempArr.join(' '));
		} catch (err) {
			console.log('Something went wrong.');
		}
	};

	return (
		<div>
			<h1>Randoname</h1>
			<h2>name: {names}</h2>
			<p>How many names?</p>
			<div className='btn-container'>
				<button onClick={() => setMany(many - 1)}>less</button>
				<h4>Qty:{many}</h4>
				<button onClick={() => setMany(many + 1)}>more</button>
			</div>
			<div className='btn-container'>
				<button onClick={() => clickHandler()}>Generate</button>
			</div>
		</div>
	);
};

export default HomePage;
