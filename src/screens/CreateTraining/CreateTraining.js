import React, { Component } from 'react';
import style from 'styled-components';

import BreakView from './components/breakView';
import ExerciseView from './components/exerciseView';

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
				{
					this.state.items.map(item => {
						if (item.itemType === 'break') {
							return <BreakView item={item} />
						}
						else {
							return <ExerciseView item={item} />
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
