import React, { Component } from 'react'

import './style.scss'

import { ReactComponent as SvgVerified } from 'assets/verified.svg'
import { ReactComponent as SvgStarFull } from 'assets/star-full.svg'
import { ReactComponent as SvgStarEmpty } from 'assets/star-empty.svg'

export default class TrainerDetails extends Component {
	render() {
		return (
			<div className="trainer-details">
				<h1 className="title"><SvgVerified/>Vladan Velojić</h1>
				<div className="avatar">
					{/* <img src="http://via.placeholder.com/250/ffefd5" alt="TrainerImage" /> */}
					<img src="https://media.licdn.com/dms/image/C4E03AQEIdyccsywDCw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=nZSu804bw_arX4hjq8m4QwqVVDswx7ZKg9vcHKgkYD4" alt="TrainerImage" />
				</div>
				<div className="details">
					<span className="info rating">
						<SvgStarFull/>
						<SvgStarFull/>
						<SvgStarFull/>
						<SvgStarFull/>
						<SvgStarEmpty/>
					</span>
					<span className="info rating">4.0/5.0</span>
					<span className="info">Total clients: 234</span>
					<span className="info">Active clients: 13</span>
					<span className="info">City: Novi Sad</span>
					<span className="info">Member since: 10.21.2018.</span>
					<span className="info">Live sessions: YES</span>
					<span className="info">izbaci ovo</span>
				</div>
				<div className="actions">
					<button className="button primary" onClick={() => alert("Open 'Hire Trainer' dialog")}>Hire</button>
					<button className="button primary" onClick={() => alert("Open conversation with the trainer")}>Message</button>
				</div>
			</div>
		)
	}
}
