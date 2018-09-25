import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import { injectGlobal } from 'styled-components';

import CreateTraining from './screens/CreateTraining/CreateTraining';
import CreateExercise from './screens/CreateExercise/CreateExercise';

injectGlobal`
	* {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
	}


`

class Root extends Component {
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path={'/'} component={CreateTraining} />
					<Route path={'/exercise'} component={CreateExercise} />
				</Switch>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
