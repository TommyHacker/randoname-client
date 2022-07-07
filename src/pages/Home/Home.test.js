/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/react';

import HomePage from '../Home/index';

describe('testing the About page', () => {
	beforeEach(() => {
		render(<HomePage />, { wrapper: Router });
	});
	test('should have an h1', async () => {
		const h1 = screen.getByText(/Randoname/i);
		expect(h1).toBeTruthy();
		const value = screen.getByText(/qty:/i);
		const button = screen.getByText('more');
		await userEvent.click();
		expect(value.textContent).toBe('Qty: 2');
	});
});
