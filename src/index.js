import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TrainersList from './screens/client/TrainersList/TrainersList'

import './index.scss'

class Root extends Component {
	render(){
		return (
			<TrainersList />
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
