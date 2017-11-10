import React from 'react';

import {
	shallow
} from 'enzyme';

import App from '../';

class ClassSTUB {}

it('renders without crashing', () => {
	// Adding ipfs to the app:

	global.Ipfs = ClassSTUB

	shallow(<App/>);
});
