import React from 'react'
// import HoldHands from './../../images/home-icons/holdhands.png';
// import HandsHeart from './../../images/home-icons/handsheart.png';
// import PrayingHeart from './../../images/home-icons/prayingicon.png';
import {BsArrowRight} from 'react-icons/bs';
import { Col as Column } from 'react-bootstrap'
import { Section } from './HomeColumnStyles'

const HomeColumn = ({paragraph, image,title, alt, link}) => {
	return (
		<>
				<Column xl={4} lg={4} md={12} sm={12} className="mx-auto">
					<Section>
					<a href={link}><div className="home-section-container">
						<img src={image} alt={alt}/>
								<h1>{title}</h1>
							
								<p>{paragraph}</p>
								<BsArrowRight className="arrow"/>
						</div></a>
					</Section>
				</Column>
		</>
	)

	
}

export default HomeColumn

