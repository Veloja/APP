import React, { Component } from 'react'

import './style.scss'
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
export default class TrainingsList extends Component {
	render() {
		const today = new Date()
		return (
			<div className='trainings-list'>
				<div className="header">
					<div className="avatar">
						<img src="https://media.licdn.com/dms/image/C4E03AQHFs9F5kcJ0QQ/profile-displayphoto-shrink_200_200/0?e=1545868800&v=beta&t=AvG0wFnqkbqmfP8y-HpFmUUO2kd1pItaMnAsKdn1YFc" alt="ClientImage" />
					</div>
					<div className="details">
						<span className="info name">Nenad Perčić</span>
						<span className="info">Weight: 85kg</span>
						<span className="info">Height: 187cm</span>
						<span className="info">Trainings: 7/12</span>
					</div>
				</div>
				<div className="trainings">
					<div className="list today">
						<h2 className="list-header">Today's training</h2>
						<div className="item">
							<span className="date">{WEEKDAYS[today.getDay()]}, {today.getDate()}/{today.getMonth()}</span>
							<span className="time">18:00</span>
						</div>
					</div>
					<div className="list pending">
						<h2 className="list-header">Pending trainings</h2>
						<ul className="sublist">
						{
							[...Array(4)].map((item, i) => 
								<li key={i} className="item">
									<span className="date">{WEEKDAYS[(today.getDay()+i)%7]}, {(today.getDate()+i+1)%31+1}/{today.getMonth()}</span>
									<span className="time">18:00</span>
								</li>
							)
						}
						</ul>
					</div>
					<div className="list finished">
						<h2 className="list-header">Finished trainings</h2>
						<ul className="sublist">
						{
							[...Array(7)].map((item, i) => 
								<li key={i} className="item">
									<span className="date">{WEEKDAYS[(today.getDay()+i)%7]}, {(today.getDate()+i+1)%31+1}/{today.getMonth()}</span>
									<span className="time">18:00</span>
								</li>
							)
						}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
