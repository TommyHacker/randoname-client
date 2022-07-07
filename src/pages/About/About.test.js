/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/react';

import About from '../About';

describe('testing the About page', () => {
	beforeEach(() => {
		render(<About />, { wrapper: Router });
	});
	test('should have an h1', async () => {
		const h1 = screen.getByText('About Randoname');
		expect(h1).toBeTruthy();
	});
});
