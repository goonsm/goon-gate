import React from 'react';

import {
	shallow
} from 'enzyme';

import App from '../';

it('renders without crashing', () => {
	// Adding ipfs to the app:
	const instance = shallow(<App/>);

	expect(instance).toBeDefined()
});
