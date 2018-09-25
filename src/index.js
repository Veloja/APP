import React from 'react';
import ReactDOM from 'react-dom';

import { injectGlobal } from 'styled-components';

// import CreateTraining from './screens/CreateTraining/CreateTraining';
import CreateExercise from './screens/CreateExercise/CreateExercise';

injectGlobal`
	* {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
`

ReactDOM.render(<CreateExercise />, document.getElementById('root'));
