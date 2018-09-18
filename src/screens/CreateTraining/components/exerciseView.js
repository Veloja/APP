import React from 'react';
import style from 'styled-components';


const excerciseView = ({item}) => {
	return (
		<ExerciseView>
			<h1>{item.name} ({item.type}) </h1>
			<Sets>Sets: <span>{item.sets}</span></Sets>
			<RepetitionsGroup>
				<h2>Repetitions:</h2>
				{
					item.repetitions.map((repetition) => {
						return (
							<Repetition>
								{repetition}
							</Repetition>
						)}
					)
				}
			</RepetitionsGroup>
			<WeightsGroup>
				<h2>Weights:</h2>
				{
					item.weights.map((weight) => {
						return (
							<Weight>
								{weight}kg
							</Weight>
						)}
					)
				}
			</WeightsGroup>
			<SetsBreak>
				<h2>Sets break:</h2>
				{
					item.breaks.map((pause) => {
						return (
							<RepetitionBreak>
								{pause}s
							</RepetitionBreak>
						)}
					)
				}
			</SetsBreak>
		</ExerciseView>
	)
}

const Sets = style.div`
	background-color: green;
`
const ExerciseView = style.div`
	width: 500px;
	margin: 0 auto;
	background-color: yellow;
	padding: 20px;
	h1 {
		display: inline-block;
	}
	.sets {
		margin-left: 20px;
	}
`
const RepetitionsGroup = style.div`
	background-color: red;
	text-align: left;
`
const Repetition = style.div`
	display: inline-block;
	margin-right: 10px;
	background-color: pink;
	padding: 5px;
`
const WeightsGroup = style.div`
	background-color: blue;
`
const Weight = style.div`
	display: inline-block;
	background-color: white;
	padding: 5px;
	margin-right: 10px;
`

const SetsBreak = style.div`
	background-color: darkgreen;
`
const RepetitionBreak = style.div`
	display: inline-block;
	background-color: white;
	padding: 5px;
	margin-right: 10px;
`

export default excerciseView;