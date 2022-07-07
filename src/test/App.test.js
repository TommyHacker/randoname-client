/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';

describe('testing the app', () => {
	beforeEach(() => {
		render(<App />, { wrapper: Router });
	});
});
