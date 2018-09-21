import React from 'react';
import style from 'styled-components';

import Repetition from '../../../components/repetition'


const excerciseView = ({item}) => {
	let exercise = {...item};
	return (
		<SContainer>
			<STitle>
				<SName>{exercise.name}</SName>
				<Repetition count={exercise.sets} />
			</STitle>
			{/* <RepetitionsGroup>
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
			</SetsBreak> */}
		</SContainer>
	)
}

const SContainer = style.div`
	width: 500px;
	margin: 0 auto;
	background-color: papayawhip;
	padding 7px 10px 10px 10px;
 `
 const STitle = style.div`
	> div {
		float: right;
	}
 `
 const SName = style.h1`
	display: inline-block;
	text-transform: uppercase;
 `

// const Sets = style.div`
// 	background-color: green;
// `
// const RepetitionsGroup = style.div`
// 	background-color: red;
// 	text-align: left;
// `
// const Repetition = style.div`
// 	display: inline-block;
// 	margin-right: 10px;
// 	background-color: pink;
// 	padding: 5px;
// `
// const WeightsGroup = style.div`
// 	background-color: blue;
// `
// const Weight = style.div`
// 	display: inline-block;
// 	background-color: white;
// 	padding: 5px;
// 	margin-right: 10px;
// `

// const SetsBreak = style.div`
// 	background-color: darkgreen;
// `
// const RepetitionBreak = style.div`
// 	display: inline-block;
// 	background-color: white;
// 	padding: 5px;
// 	margin-right: 10px;
// `

export default excerciseView;