import React from 'react';
import style from 'styled-components';

const Repetition = ({count = 0}) => {
	const numberPosition = count > 9 ? 114 : 170;
	return (
		<SContainer>
			<svg version="1.1" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.1 489.1" >
				<g>
					<g>
						<path d="M379.2,265.4c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l53.1,53.1c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l53.1-53.1 c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0L436,297.6V65.2c0-28.1-22.9-51-51-51H104.1c-28.1,0-51,22.9-51,51v33.9 c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3V65.2c0-14.6,11.9-26.5,26.5-26.5H385c14.6,0,26.5,11.9,26.5,26.5v232.5L379.2,265.4 z"/>
						<path d="M20.9,223.6l32.2-32.2v232.5c0,28.1,22.9,51,51,51h280.8c28.1,0,51-22.9,51-51V390c0-6.8-5.5-12.3-12.3-12.3 s-12.3,5.5-12.3,12.3v33.9c0,14.6-11.9,26.5-26.5,26.5H104.1c-14.6,0-26.5-11.9-26.5-26.5V191.3l32.2,32.2 c2.4,2.4,5.5,3.6,8.7,3.6c3.1,0,6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-53.1-53.1c-2.3-2.3-5.4-3.6-8.7-3.6 c-3.2,0-6.4,1.3-8.7,3.6L3.6,206.2c-4.8,4.8-4.8,12.5,0,17.3C8.3,228.3,16.1,228.3,20.9,223.6z"/>
					</g>
				</g>
				<foreignObject x={numberPosition} y="90" width="100" height="100">
					<SCount xmlns="http://www.w3.org/1999/xhtml">
						<h1>{count}</h1>
					</SCount>
				</foreignObject>
			</svg>
		</SContainer>
	)
}

const SContainer = style.div`
	width: 40px;
	height: 40px;
`

const SCount = style.div`
	font-size: 8.5rem;
	text-align: center;
	letter-spacing: -2rem;
`

export default Repetition;

