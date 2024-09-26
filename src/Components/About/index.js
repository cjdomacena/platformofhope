import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import {AboutImage, AboutHero, AboutStory, AboutHeader, AboutPhases} from './AboutStyle';
import aboutLogo from './../../images/about/about-logo.png';

import about1 from './../../images/phases/about-1.png';
import about2 from './../../images/phases/about-2.png';
import about3 from './../../images/phases/about-3.png';



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
						<div className="container">
						<div className="row">
								<div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
									<div className="about-image-container">
										{/* Image styling on aboutstyle */}
									</div>

								</div>
								<div className="col-lg-8 mt-md-3 mt-lg-3 mt-sm-5 mt-5 justify-content-sm-center d-flex flex-column align-items-sm-center justify-content-lg-start justify-content-xl-start align-content-start  ">
									<h2 className="align-self-lg-start align-self-center">Our Story</h2>
									<p>Platform of Hope was started in 2016 by a single mother who is passionate about enhancing the lives of others. The platform is driven by a desire to impact and fulfill a mission that omits greed and focuses on the needs of the homeless population in Atlanta. After a combined 20 years of working for corporate America, nonprofits, and GA Dept. of Family & Children Services, Doris defied odds, used her personal savings, and started Platform of Hope in a two-room storefront in Decatur, Georgia.</p>
									<div className="about-quote d-flex mt-2">
										<span className="vertical-line">|</span><p> Driven by a desire to impact and fulfill a mission that omits greed and focuses on the needs of the homeless</p>
									</div>
								</div>

						</div>

						</div>
				</div>
			</AboutStory>
			<hr></hr>
			<AboutHeader>
				<div className="about-header-container container">
					<div className="about-header">
						<h2>The Difference</h2>
						<p>While other agencies look great on paper, thousands of dollars go toward bonuses to employees each year. Fortunately, while Platform of Hope awaits state and federal funding, every dime is allocated TO the client for stabilization. We rely heavily on donations from family, friends, and the community for services and operating costs.</p>
					</div>
				</div>

			</AboutHeader>

		<AboutPhases>
			<div className="container about-phases">
					<Row>

					<Col xl={6} className="phases-container mt-md-5 mt-xl-0 mt-lg-0 mt-sm-5">
							<div className="phase-1">
							<img src={about1} alt="an emtpy room"></img>
							<div className="mt-3">
								<h3>Phase 1</h3>
							   <p>Due to lack in current funding, services are being introduced in phases. During the first phase services consist of a food pantry and coat/cap/blanket closet. Based on funding, clients also receive assistance with prescriptions and transportation to/from work or organization.</p>
							   </div>
							</div>


						</Col>
						<Col xl={6} className="phases-container mt-md-5 mt-xl-0 mt-lg-0 mt-sm-5">
							<div className="phase-1 py-md-3 py-xl-0 py-lg-0 py-sm-3 py-xs-3">
							<img src={about2} alt="bed spaces"></img>
							<div className="mt-3">
								<h3>Phase 2</h3>
							   <p>In addition to the food pantry and clothes closet enhancement, Phase II introduces a much more aggressive approach to stabilization and will incorporate a small dormitory-style 25-bed shelter for women and children.</p>
							   </div>
							</div>


						</Col>
						<Col xl={12} className="phases-container mt-md-5 mt-xl-5 mt-lg-5 mt-sm-5">
							<div className="phase-1 py-md-3 py-xl-0 py-lg-0 py-sm-3 py-xs-3 final-phase">
							<img src={about3} alt="housing for final phase"></img>
							<div className="mt-3">
								<h3>Final Phase</h3>
							   <p>The final phase of Platform of Hope will introduce an array of services such as supportive employment, transportation services, educational assistance, GED/typing classes, Federal/State benefits application assistance, daycare resources, HIV testing, address and mail service, and much more.</p>
							   </div>
							</div>


						</Col>

					</Row>
			</div>
		</AboutPhases>

		</Container>
	)
}

export default AboutPage;
