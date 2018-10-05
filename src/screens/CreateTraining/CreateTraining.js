import React, { Component } from 'react'
import style from 'styled-components'
import { withRouter } from 'react-router-dom'

import * as Service from '../../services/ExerciseService'

import BreakView from './components/breakView'
import ExerciseView from './components/exerciseView'

class CreateTraining extends Component {
	constructor(props){
		super(props)
		this.state = {
			items: []
		}
	}

	componentWillMount(){
		this.setState({
			items: Service.getExercises().sort((a, b) => b.id - a.id)
		})
	}

	render() {
		return (
			<STrainingScreen>
				<button onClick={this.createExercise}>Add new exercise</button>
				<button onClick={this.clearAll}>Clear All</button>
				{
					this.state.items.map((item, i) => {
						if (item.itemType === 'break') {
							return <BreakView key={i} item={item} />
						}
						else {
							return <ExerciseView key={i} item={item} />
						}
					})
					// this.state.items.map(item => {
					// 	return item.itemType === 'break'
					// 	? <Break item={item} />
					// 	: <Exercise item={item} />
					// })
				}
			</STrainingScreen>
		);
	}

	createExercise = () => {
		this.props.history.push('/Exercise')
	}

	clearAll = () => {
		window.confirm('Are you sure you want to clear all data?') && Service.clearAll();
	}
}

export default withRouter(CreateTraining)

const STrainingScreen = style.div`
	background-color: rgb(54,54,54);
	padding: 50px;
`
