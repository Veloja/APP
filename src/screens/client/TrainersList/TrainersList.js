import React, { Component } from 'react'

import './style.scss'

import { ReactComponent as SvgLocation } from 'assets/location.svg'
import { ReactComponent as SvgClient } from 'assets/clients.svg'
import { ReactComponent as SvgVerified } from 'assets/verified.svg'
import { ReactComponent as SvgStarEmpty } from 'assets/star-empty.svg'
import { ReactComponent as SvgStarFull } from 'assets/star-full.svg'

export default class TrainersList extends Component {
	render() {
		return (
			<div className="trainers-list">
				<h1 className="title">Choose your trainer</h1> 
				<ul className="list">
				{
					[...Array(10)].map((item, i) => 
						<li className="item" key={i} onClick={() => alert("Open trainer details")}>
							<div className="avatar">
								{/* <img src="http://via.placeholder.com/250/ffefd5" alt="TrainerImage" /> */}
								<img src="https://media.licdn.com/dms/image/C4E03AQEIdyccsywDCw/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=nZSu804bw_arX4hjq8m4QwqVVDswx7ZKg9vcHKgkYD4" alt="TrainerImage" />
							</div>
							<div className="details">
								<span className="info name"><SvgVerified />Vladan Velojić</span>
								<span className="info rating">
									<SvgStarFull/>
									<SvgStarFull/>
									<SvgStarFull/>
									<SvgStarFull/>
									<SvgStarEmpty/>
								</span>
								<span className="info"><SvgLocation />Novi Sad</span>
								<span className="info"><SvgClient />234</span>
								<span className="info price">$13</span> 
							</div>
						</li>
					)
				}
				</ul>
			</div>
		)
	}
}
