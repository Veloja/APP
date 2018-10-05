import React, { Component } from 'react'
import style from 'styled-components'
import {withRouter} from 'react-router-dom'
import * as Service from '../../services/ExerciseService'

class CreateExcercise extends Component {
		constructor(props) {
				super(props);

				this.state = {
						sets: 3
				}
		}

		render() {

				return (
						<SExerciseContainer>
								<button onClick={this.back}>Back</button>
								<SInputGroup>
										<label>Exercise name: </label>
										<input type="text" defaultValue="Enter name" />
								</SInputGroup>
								<SInputGroup>
										<label>Sets: </label>
										<input type="number" defaultValue={this.state.sets} onChange={this.updateSets}
										min={1} max={10} />
								</SInputGroup>
										<WrapperForEverything>
												<WrapForRepetitons>
														<label for="reps">Reps</label>
														{
																[...Array(this.state.sets)].map((item, index) =>
																		<SBasedOnSets sets={this.state.sets} >
																				<input key={index} type="number" />
																		</SBasedOnSets>
																)
														}
												</WrapForRepetitons>

												<WrapForRepetitons>
														<label for="weights">Weights</label>
														{
																[...Array(this.state.sets)].map((item, index) =>
																		<SBasedOnSets sets={this.state.sets} >
																				<input id="weights" key={index} type="number" />
																		</SBasedOnSets>
																)
														}
												</WrapForRepetitons>

												<WrapForRepetitons>
														<label for="Break">Break</label>
														{
																[...Array(this.state.sets)].map((item, index) =>
																		<SBasedOnSets sets={this.state.sets} >
																				<input key={index} type="number" />
																		</SBasedOnSets>
																)
														}
												</WrapForRepetitons>
										</WrapperForEverything>
										<button onClick={this.save}>Save</button>
						</SExerciseContainer>
				)
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