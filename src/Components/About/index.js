import React from 'react'
import { Container } from 'react-bootstrap'
import {AboutImage, AboutHero, AboutStory} from './AboutStyle';
import aboutLogo from './../../images/about/about-logo.png';
const AboutPage = () => {
	return (
		<Container fluid className="about-container">
			<AboutImage>
				<AboutHero>
					<h1>Heal a Hurting World</h1>
					<p>We are driven by a desire to impact and fulfill a mission that omits greed and focuses on the needs of the homeless population.</p>
				</AboutHero>
			</AboutImage>
			<AboutStory>
				<div className="container">
					<div className="row">
						<div className="col-3 about-left">
							<div className="about-logo">
									<img src={aboutLogo} alt=""/>
							</div>
							<div className="about-header">
									<h1>Our Story</h1>
							</div>
							</div>
						<div className="col-9 about-right">
							<div className="about-text">
								<p>Platform of Hope was started in 2016 by a single mother who is passionate about enhancing the lives of others. The platform is driven by a desire to impact and fulfill a mission that omits greed and focuses on the needs of the homeless population in Atlanta. After a combined 20 years of working for corporate America, nonprofits, and GA Dept. of Family & Children Services, Doris defied odds, used her personal savings, and started Platform of Hope in a two-room storefront in Decatur, Georgia.</p>
								<div className="about-smallText">
							<span> Driven by a desire to impact and fulfill a mission that omits greed and focuses on the needs of the homeless</span>
							</div>
							</div>
						
						</div>
					</div>
				</div>
			</AboutStory>
		</Container>
	)
}

export default AboutPage;
