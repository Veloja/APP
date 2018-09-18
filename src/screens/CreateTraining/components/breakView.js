import React from 'react';
import style from 'styled-components';

const breakView = ({item}) => {
	return (
		<Container>
			Pauza {item.duration} {item.type}
		</Container>
	)
}

const Container = style.div`
	background-color: darkorange;
	text-align: center;
	width: 450px;
	margin: 0 auto;
	padding: 10px;
`

export default breakView;