import React from 'react';
import ReactDOM from 'react-dom';

import { injectGlobal } from 'styled-components';

import CreateTraining from './screens/CreateTraining/CreateTraining';

injectGlobal`
	* {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
`

ReactDOM.render(<CreateTraining />, document.getElementById('root'));
