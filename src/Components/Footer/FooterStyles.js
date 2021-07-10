import styled from 'styled-components'

export const FooterContainer = styled.div`

	max-width: 1440px;
	margin: 0 auto;
	padding: 1rem;
	position: relative;
		@media screen and (max-width: 900px)
		{
			padding: 0 5rem;
			font-size: 16px !important;
		}
		.logo-container
		{

			padding:1rem;
		}

`

export const Container = styled.div`
		border-top: .4px solid rgba(0,0,0,.1);
	box-shadow: inset;
	margin: 0 auto;
	height: auto;
	padding: 1rem 1rem 2rem 1rem;

	.logo-container
	{
		display: grid;
		.footer-info
		{
			padding: 0;
		}
		@media screen and (max-width: 750px)
		{
			justify-content:center;
			width: 100%;

					.footer-info
				{
					@media screen and (min-width: 420px) and (max-width: 750px)
					{
						display:flex;
					}
					width: fit-content;
					margin: 0;
					padding: 0;
					.email
					{
						padding-top: 1rem;
					}
				}
		}


	}
`

export const CompanyInfo = styled.div`
margin-top: 1.2rem;
margin-left: 3.5rem;
	h4
{
	font-size: 1.2rem;
	color: #F99F00;
	font-weight: 400;
}
p
{
	padding: 0;
	margin: 0;
	line-height: 22px;
	color: black;
	font-size: 1rem;
}

`
export const Contact = styled.div`
margin-top: 1rem;
margin-left: 3.5rem;
h4
{
	font-size: 1.2rem;
	color: #F99F00;
	font-weight: 400;
}

span
{
	padding: 0;
	margin: 0;
	line-height: 22px;
	color: black;
	font-weight: 300;
}
`



export const QuickLinks = styled.div`
display: grid;
justify-content: center;

@media screen and (max-width: 750px)
		{
			justify-content: center;
			margin-top: 1rem;
			margin-left: 1.3rem;
		}
margin-top:1rem;
h4
{
	font-size: 1.2rem;
	color: #009A7B;
	font-weight: 600;
}

.footer-links
{
	padding-top: 1rem;
	display:grid;
	grid-template-rows: 1fr 1fr ;
	grid-template-columns: 150px 150px;
	grid-gap: .5rem;
}
a
{
	text-decoration: none;
	color: black;
	font-weight: 300;
	font-size: 1.2rem;
}
`
export const SocialMedia = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top:1rem;
h4
{
	font-size: 1.2rem;
	color: #009A7B;
	font-weight: 600;
	width: 170px;
	text-align: center;
	@media screen and (max-width: 750px)
		{

			text-align: center;

		}
}

.social-links
{
	display: flex;

	a
	{
		padding-right: 1rem;
		margin-top: 1rem;
	}
}

.bronze-star
{
	height: 100px;
	width: 100px;
	margin-top: 1rem;
}

`

export const Tag = styled.div`
width:270px;
font-weight: 300;
font-size: .8rem;
font-style: italic;
margin-top: 2rem;
text-align: center;
`