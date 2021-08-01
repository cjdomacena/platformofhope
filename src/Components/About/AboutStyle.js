import styled from 'styled-components';
import aboutImage from '../../images/about/about-home.png';
import aboutProfile from '../../images/about/doris-profile.jpg';

export const AboutImage = styled.div`

height: 500px;
width: 100%;
background-image: url(${aboutImage});
background-position:center;
background-size:cover;
	display: grid;
	place-items: center;
`

export const AboutHero = styled.div`
text-align: center;

h1 
{
	font-size: 64px;
	line-height: 88px;
	color: white;
	font-family: 'Scheherazade', serif;
	font-weight: 400;
}
p 
{
	max-width:60ch;
	line-height: 33px;
	color: white;
	font-size: 21px;
}
`

export const AboutStory = styled.div`

height: auto;
width: 100%;
h2 
{
font-weight: 900;
color:#009A7B;
font-size: 4.5rem;
}
p {

	color: #161616;
	font-size: 1rem;
}
.row
{
	padding: 1rem;
}
.container 
{


	margin-top: 2rem;
	margin-bottom: 2rem;
}

.about-image-container 
{
height: 250px;
width: 250px;
border-radius: 125px;
background-image: url(${aboutProfile});
background-size: cover;
background-position: center;

}
.about-quote 
{

p 
{
	font-size: 1rem;
	color:#009A7B ;
}
span 
{
	color:#009A7B ;
}




}
.vertical-line
{
height: auto;
color: red;
margin-right: .5rem;
margin-top: .1rem;
}

.about-right
{
	padding:0;
	height: auto;
	position: relative;
	p 
	{
		line-height: 33px;
		color: #161616;
	
	}
	span 
	{
		border-left: 3px solid #009A7B;
		padding-left: 1rem;
		color: #009A7B;
		position: absolute;
		bottom: -2rem;
		left: 0;
	}
}
`

export const AboutHeader = styled.div`
max-width: 100%;
.about-header-container 
{
	padding: 3rem;
	text-align: center;
	/* h2 
	{
		font-size: 48px;
		color: black;
		font-family: 'Scheherazade', serif;
		font-weight: 700;
		line-height: 73px;
	} */
	p
	{
	
		font-size: 1rem;
		color: black;
		line-height: 28px;
	}
	.about-header 
	{
		max-width: 849px;
		margin: 0 auto;
	}
}
display:grid;
place-items:center;
`


export const AboutPhases = styled.div`

padding-bottom: 3rem;

.phases-container 
{
	display:flex;
	flex-direction: column;
	justify-content: space-between;


	h3 
	{
		font-size: 2rem;
		line-height: 52px;
		color: #F99F00;
		font-family: 'Scheherazade', serif;
	}
	p 
	{
		font-size:1rem;
		line-height: 33px;
		color:black;
	}
	.phase-3
	{
		h3 
		{
			font-size:2.3rem;
			font-weight: 700;
		}
		
	}

	@media screen and (max-width: 1200px)
	{

		margin: 2rem 0;
	}
}
.about-phases img 
{
	width: 100%;
	height: 322px;
	@media screen and (max-width: 900px)
	{

		height: auto;
	}
}
.about-phases .final-phase img
{
	width: 100%;
	height: 500px;
	@media screen and (max-width: 900px)
	{

		height: auto;
	}
}


`