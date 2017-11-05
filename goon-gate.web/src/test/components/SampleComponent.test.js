import React from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from 'components/SampleComponent';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SampleComponent />, div);
});
