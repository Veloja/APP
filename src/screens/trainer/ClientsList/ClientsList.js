import React, { Component } from 'react'

import './style.scss'

export default class ClientsList extends Component {
	render() {
		return (
			<div className='clients-list'>
				<h1 className="title">Select your client</h1>
				<ul className="list">
				{
					[...Array(10)].map((item, i) => 
						<li className="item" key={i} onClick={() => alert("Open Client Trainings")}>
							<div className="avatar">
								<img src="https://media.licdn.com/dms/image/C4E03AQHFs9F5kcJ0QQ/profile-displayphoto-shrink_200_200/0?e=1545868800&v=beta&t=AvG0wFnqkbqmfP8y-HpFmUUO2kd1pItaMnAsKdn1YFc" alt="ClientImage" />
							</div>
							<div className="details">
								<span className="info name">Nenad Perčić</span>
								<span className="info">Weight: 85kg</span>
								<span className="info">Height: 187cm</span>
								<span className="info">Trainings: 7/12</span>
							</div>
						</li>
					)
				}
				</ul>
			</div>
		)
	}
}