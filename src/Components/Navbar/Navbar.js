import React from "react";
import logo from "./../../images/pohLogo-2.png";
import { Link } from "react-router-dom";
import {
    Container,
    LogoContainer,
    ImageContainer,
    LogoName,
    NavContainer,
    NavLinks,
    NavLink,
    NavButton,
    MobileIcon
} from "./NavbarStyles";
// import { FaBars } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
const NavBar = ({handleClick}) => {
    return (
        <>
            <Container>
                <NavContainer>
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
                    {/* In progress */}
                    <MobileIcon onClick={handleClick}>
                        <GiHamburgerMenu />
                    </MobileIcon>
                    <NavLinks>
                        <NavLink>
                            <Link to="/services">Services</Link>
                        </NavLink>
                        <NavLink>
                            <Link to="/about">About Us</Link>
                        </NavLink>

                        <NavLink>
                            <Link to="/newsandevents">
                                News & Events
                </Link>
                        </NavLink>
                        <NavLink>
                            <Link to="/contact">Contact</Link>
                        </NavLink>
                        <NavLink>
                            <Link to="/partners">Partners</Link>
                        </NavLink>
                        <Link to="/gethelp" ><NavButton className="secondary">GET HELP</NavButton></Link>
                        <Link to="/donate" ><NavButton className="primary">DONATE</NavButton></Link>
                    </NavLinks>

                </NavContainer>
            </Container>
        </>
    );
};

export default NavBar;
