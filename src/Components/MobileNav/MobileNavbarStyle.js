import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const MobileNavbarContainer = styled.aside`
position: fixed;
z-index: 99;
width: 100%;
height: 100%;
background-color: #0d0d0d;
display: grid;
place-items:center;
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
/* top:0; */
left:0;
transition: 0.2s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`

export const CloseIcon = styled(FaTimes)`
color: white;
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 1.2rem;
	cursor: pointer;
`

export const NavWrapper = styled.div`

	text-align: center;


`
export const NavLinks = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4	, 75px);
	@media screen and (max-width: 500px)
	{
		grid-template-rows: repeat(5,60px)
	}
a {
	text-decoration:none;
	color:white;

}

`
export const NavLink = styled(Link)`
display:flex;
align-items: center;
justify-content:center;
font-size: 1.5rem;
font-weight: 300;
list-style: none;
transition: 0.3s ease-in-out;
text-decoration:none;
width:max-content;
margin: 0 auto;
/* width: 150px; */
height: 80px;
&:hover 
{
	color: red;
	transition: 0.2s ease-in-out;
}
`

export const ButtonLink = styled.button`
	width: 160px;
	height: 50px;
	margin-top: 1rem;
	margin-left: 1rem;
	font-size: 1rem;
	color: #fffffe;
	font-weight: 500;
	letter-spacing: 1.2px;
	background-color: #F99F00;
	text-align:center;
	cursor: pointer;
	&:hover 
	{
		background-color: #F99F00;
		transition: 0.2s ease-in-out;
	}

`
export const NavBtnWrapper = styled.div`
	display:flex;
	align-items:center;
	flex-direction:column;
`