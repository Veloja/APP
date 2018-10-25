import React, { Component } from 'react'

import './style.scss'

export default class TrainingPreview extends Component {
	render() {
		return (
			<div className="training-preview">
				<div className="header">
					<div className="avatar">
						<img src="https://media.licdn.com/dms/image/C4E03AQHFs9F5kcJ0QQ/profile-displayphoto-shrink_200_200/0?e=1545868800&v=beta&t=AvG0wFnqkbqmfP8y-HpFmUUO2kd1pItaMnAsKdn1YFc" alt="ClientImage" />
					</div>
					<h2 className="name">Nenad Perčić</h2>
				</div>
				<div className="info">
					<button type="button" className="navigation" disabled onClick={() => alert('Show previous training')}>{'<'}</button>
					<div className="description">
						<h1 className="title">Wednesday</h1>
						<span className="subtitle">29. September 2018</span>
					</div>
					<button type="button" className="navigation" onClick={() => alert('Show next training')}>{'>'}</button>
				</div>
				<div className="details">
				<ul className="list">
					{
						[...Array(52)].map((a, i) => 
							<li className="item">Excercise {i+1}</li>
						)
					}
				</ul>
				</div>

			</div>
		)
	}
}
