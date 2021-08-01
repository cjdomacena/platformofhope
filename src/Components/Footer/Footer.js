import React from 'react'
import { Col as Column, Row } from 'react-bootstrap'
import logo from "./../../images/pohLogo-2.png";
import { LogoContainer, ImageContainer, LogoName } from './../Navbar/NavbarStyles'
import {
	Container,
	FooterContainer,
	CompanyInfo,
	Contact,
	QuickLinks, SocialMedia, Tag
} from './FooterStyles'

import fb from './../../images/facebook.svg'
import twitter from './../../images/twitter.svg'
import instagram from './../../images/instagram.svg'
import youtube from './../../images/youtube.svg'
import { Link } from 'react-router-dom';
import guideStar from './../../images/guidestar-silver.png';
const Footer = () => {
	
	return (
		<Container>
			<FooterContainer>

				<Row>
					{/* Logo and Info */}
					<Column lg={4} md={6} sm={12}>
						<div className="logo-container">
							<LogoContainer>
								<ImageContainer>
									<Link to="/">
										<img src={logo} alt="platform of hope logo" />
									</Link>
								</ImageContainer>
								<LogoName>
									<Link to="/">
										<h4>PLATFORM OF HOPE</h4>
										<p>One Family at A time</p>
									</Link>
								</LogoName>

							</LogoContainer>
							<div className="footer-info">
								<CompanyInfo>
									<div className="mailing-address">
										<h4>Mailing Address: </h4>
										<p>P.O. Box 48198</p>
										<p>Atlanta, GA 30362</p>
									</div>
								</CompanyInfo>
								<Contact>
									<div className="phone">
										<h4>Phone: </h4>
										<span>770-767-0200</span>
									</div>
									<div className="email">
										<h4>Email: </h4>
										<span>info@platformofhope.org</span>
									</div>
								</Contact>
							</div>
						</div>
					</Column>




					<Column lg={4} md={6} sm={12}>
						<QuickLinks>
							<div className="quick-links">
								<h4>Quick Links</h4>
								<ul className="footer-links">
									<Link to="/"><li className="footer-link">Home</li></Link>
									<Link to="/about"><li className="footer-link">About Us</li></Link>
									<Link to="/services"><li className="footer-link">Services</li></Link>
									<Link to="/contact"><li className="footer-link">Contact</li></Link>
									<Link to="/newsandevents"><li className="footer-link">News and Events</li></Link>
									<Link to="/gethelp"><li className="footer-link">Get Help</li></Link>
									<Link to="/donate"><li className="footer-link">Donate</li></Link>
								</ul>
							</div>
						</QuickLinks>
					</Column>
					<Column lg={4} md={12} sm={12}>
						<SocialMedia>
							<h4>Follow Us On: </h4>
							<ul className="social-links">
								<Link><li> <img src={fb} alt="facebook icon" /> </li></Link>
								<Link><li> <img src={twitter} alt="facebook icon" /> </li></Link>
								<Link><li> <img src={instagram} alt="facebook icon" /> </li></Link>
								<Link><li> <img src={youtube} alt="facebook icon" /> </li></Link>
							</ul>
							<img src={guideStar} alt="501(c)(3) image"  className="bronze-star"/>
							<Tag>
						
								<span>Platform of Hope is 501(c)(3) approved as of April 2017.</span><br /><br />

							</Tag>
						</SocialMedia>
					</Column>
				</Row>


			</FooterContainer>
		</Container>
	)
}

export default Footer
