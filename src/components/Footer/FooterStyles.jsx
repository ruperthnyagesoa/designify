import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	padding: 4rem 0 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(to bottom right, #c04de2, #340c7f);
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
	width: 100%;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
		'Lucida Sans', Arial, sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
	margin-right: 0.2rem;
	width: 40px;
`;

export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
`;