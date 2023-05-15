import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<SocialLogo to='/'>
					<SocialIcon src='./images/logo.svg' />
					esignify
				</SocialLogo>
				<FooterSubHeading>Interested working with us?</FooterSubHeading>
			</FooterSubscription>

			<SocialMedia>
				<SocialMediaWrap>
					<WebsiteRights>
						&copy; Copyright 2023, Designify. All Rights Reserved
					</WebsiteRights>
					<SocialIcons>
						<SocialIconLink
							href='/'
							target='_blank'
							rel='noreferrer'
							aria-label='Facebook'
						>
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink
							href='/'
							target='_blank'
							rel='noreferrer'
							aria-label='Instagram'
						>
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink
							href='/'
							target='_blank'
							rel='noreferrer'
							aria-label='Twitter'
						>
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink
							href='/'
							target='_blank'
							rel='noreferrer'
							aria-label='Youtube'
						>
							<FaYoutube />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;