import React from 'react';
import style from 'styled-components';

import Stopwatch from '../../../components/stopwatch';

const breakView = ({item}) => {
	return (
		<SContainer>
			<Stopwatch minutes={1} />
			<span> 5 min </span>
		</SContainer>
	)
}

const SContainer = style.div`
	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	width: 450px;
	margin: 0 auto;
	padding: 10px;
	color: white;
`

export default breakView;