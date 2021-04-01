import styled from 'styled-components'


export const Section = styled.div`
display: flex;
align-items: center;
justify-content:center;
text-align: center;
padding: 3rem;
@media screen and (max-width: 800px)
{
	padding: 2rem;
}
h1
{
	font-size: 2rem;
	color: #424242;
	line-height: 88px;
	font-weight: 500;
}
p 
{
	max-width: 45ch;
	color: #414141;
	font-weight: 300;
	font-size: 1rem;
	line-height: 33px;

	@media screen and (max-width: 500px)
	{
		width: auto;
		padding: 0 .5rem;
	}
}
.home-section-container
{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 450px;
	height: auto;
	padding: 1rem;
}
.home-section-container:hover 
{

		transform: translate(5%,-5%);
		box-shadow: 5px 6px 19px rgba(0, 0, 0, 0.25);
		transition: 0.3s ease-in;
		cursor: pointer;
		
}

svg
{
	font-size: 2rem;
}

`
