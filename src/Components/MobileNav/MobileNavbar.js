import React from 'react'
import {
	MobileNavbarContainer,
	Icon,
	CloseIcon,
	NavWrapper,
	NavLinks,
	NavLink,
	NavBtnWrapper,
	ButtonLink
} from './MobileNavbarStyle';

import { Link } from 'react-router-dom';
const MobileNavbar = ({isOpen, handleClick}) => {
	return (
		<MobileNavbarContainer isOpen = {isOpen} handleClick={handleClick} onClick={handleClick}>
			<Icon>
				<CloseIcon />
			</Icon>
			<NavWrapper>
				<NavLinks>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/services">Services</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/newsandevents">News & Events</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					<NavLink to="/partners">Partners</NavLink>
				</NavLinks>

				<NavBtnWrapper>
				<Link to="/gethelp">	<ButtonLink>GET HELP</ButtonLink></Link>
				<Link to="/donate">	<ButtonLink>DONATE</ButtonLink></Link>
				</NavBtnWrapper>
			</NavWrapper>

		</MobileNavbarContainer>

	)
}

export default MobileNavbar
