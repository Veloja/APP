import React, { Component } from 'react'
import style from 'styled-components'
import { Link } from 'react-router-dom'

import BreakView from './components/breakView'
import ExerciseView from './components/exerciseView'

export default class CreateTraining extends Component {
	constructor(props){
		super(props)
		this.state = {
			items: []
		}
	}

	componentWillMount(){
		this.setState({
			items: require('../../dummy/training.json')
		})
	}

	render() {
		return (
			<STrainingScreen>
				<Link to="/exercise">Add new exercise</Link>
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
}

const STrainingScreen = style.div`
	background-color: rgb(54,54,54);
	padding: 50px;
`
