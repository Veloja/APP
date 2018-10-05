import React, { Component } from 'react'
import style from 'styled-components'
import {withRouter} from 'react-router-dom'
import * as Service from '../../services/ExerciseService'

class CreateExcercise extends Component {
		constructor(props) {
				super(props);

		this.state = {
			sets: 3,
			breaks: [...Array(3)],
			reps: [...Array(3)],
			weights: [...Array(3)]
				}
		}

		render() {

				return (
						<SExerciseContainer>
								<button onClick={this.back}>Back</button>
								<SInputGroup>
										<label>Exercise name: </label>
										<input name="name" type="text" defaultValue="Enter name"
														onChange={this.onInputChange} />
								</SInputGroup>
								<SInputGroup>
										<label>Sets: </label>
										<input name="sets" type="number" defaultValue={3} onChange={this.onSetsChange} min={1}/>
								</SInputGroup>
										<WrapperForEverything>
												<WrapForRepetitons>
														<label htmlFor="reps">Reps</label>
														{
																[...Array(+this.state.sets)].map((item, index) =>
																		<SBasedOnSets key={index} sets={this.state.sets} >
																				<input name="reps" onChange={(event) => this.onPropChange(event, index)} type="number" />
																		</SBasedOnSets>
																)
														}
												</WrapForRepetitons>

												<WrapForRepetitons>
														<label htmlFor="weights">Weights</label>
														{
																[...Array(+this.state.sets)].map((item, index) =>
																		<SBasedOnSets key={index} sets={this.state.sets} >
																				<input name="weights" onChange={(event) => this.onPropChange(event, index)} id="weights" type="number" />
																		</SBasedOnSets>
																)
														}
												</WrapForRepetitons>

												<WrapForRepetitons>
														<label htmlFor="Break">Break</label>
														{
																[...Array(+this.state.sets)].map((item, index) =>
																		<SBasedOnSets key={index} sets={this.state.sets} >
																				<input name="breaks" onChange={(event) => this.onPropChange(event, index)} type="number" />
																		</SBasedOnSets>
																)
														}
												</WrapForRepetitons>
										</WrapperForEverything>
										<button onClick={this.save}>Save</button>
						</SExerciseContainer>
				)
	}
		onInputChange = (event) => {
				this.setState({
						[event.target.name]: event.target.value
		}, () => console.log(this.state))
	}

	onSetsChange = (event) => {
		const sets = +event.target.value
		const placeholder = [...Array(sets)]
		this.setState({
			sets,
			reps: [...this.state.reps, ...placeholder].slice(0, sets),
			weights: [...this.state.weights, ...placeholder].slice(0, sets),
			breaks: [...this.state.breaks, ...placeholder].slice(0, sets)
		}, () => console.log(this.state))
	}

	onPropChange = (event, index) => {
		let arr = [...this.state[event.target.name]]
		arr[index] = event.target.value
		this.setState({
			[event.target.name]: arr
		}, () => console.log(this.state))
	}
	
		updateSets = (event) => {
				this.setState({
					sets: +event.target.value
				})
		}

		back = () => {
				this.props.history.goBack()
		}

		save = () => {
				this.setState({
					exercise: {
						itemType: 'exercise',
						index: 123,
						name: 'Test'
					}
				}, () => {
					Service.createExercise(this.state.exercise)
				})
				this.back()
		}
}

export default withRouter(CreateExcercise)

const SExerciseContainer = style.div`
		height: 400px;
		width: 500px;
		margin: 0 auto;
		background-color: papayawhip;
		text-align: center;
		padding: 30px;
`

const SInputGroup = style.div`
		margin-bottom: 20px;
		text-align: left;
		label {
				width: 100px;
				display: inline-block;
		}
`
const WrapperForEverything = style.div`
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		max-width: 500px;
`

const WrapForRepetitons = style.div`
		max-width: 30%;
`

const SBasedOnSets = style.div`
		display: block;
		width: 100px;
		min-width: 33%;
		margin-bottom: 10px;
		input {
				width: 100px;
		}
`