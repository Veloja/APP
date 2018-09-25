import React from 'react';
import style from 'styled-components';

const MAX_MINUTES = 6;

const Stopwatch = ({minutes = 1}) => {
	return (
		<SContainer>
			<SClockHandle />
			<SClockBody>
				<SClockNeedle minutes={minutes}/>
			</SClockBody>
		</SContainer>
	)
}

const SContainer = style.div`
	position: relative;
	width: 50px;
	height: 50px;
	border: 1px solid transparent;
`

const SClockHandle = style.div`
	border-top: 2px solid white;
	border-right: 2px solid white;
	border-left: 2px solid white;
	width: 14px;
	top: 1px;
	position: absolute;
	margin-left: auto; margin-right: auto; left:0; right:0;
	height: 5px;
	border-radius: 3px;
`

const SClockBody = style.div`
	width: 80%;
	height: 80%;
	border: 2px solid white;
	border-radius: 50%;
	position: absolute;
	left:0; right:0; bottom:0;
	margin-left: auto; 
	margin-right: auto; 
`

const SClockNeedle = style.div`
	width: 2px;
	height: 20px;
	background: white;
	position: absolute;
	top: 3%;
	left: 50%;
	transform-origin:50% 100%;
	-webkit-transform-origin:50% 100%;
	-webkit-transform: rotate(${props => Math.round(props.minutes*360/MAX_MINUTES)}deg);
`

export default Stopwatch;