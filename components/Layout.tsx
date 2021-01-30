import { Box, Container, useColorMode, Flex, Button } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { SimpleNav } from './SimpleNav';

interface Props {
	withContainer?: boolean;
}

/**
 * Layout composes SimpleNavbar and justifies children content
 * @param param0
 */

const Layout: React.FC<Props> = ({ withContainer, ...rest }: Props) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box>
			<Head>
				<meta property="og:image" content="/meta-image.png" />
				{/* <meta
					property="og:image"
					content="https://og-image.now.sh/%F0%9F%98%9B%F0%9F%98%9B%F0%9F%98%9B%E2%9C%85%F0%9F%92%B8%F0%9F%92%AA.png?theme=dark&md=1&fontSize=175px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=0&heights=0"
				/> */}
				<title>91wal</title>
				<link
					rel="icon"
					href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/check-mark-button_2705.png"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<SimpleNav
				title="91Wal"
				// navlinks={[
				// 	{ path: '/', text: 'Items' },
				// ]}
				ctaItems={[
					<Button onClick={toggleColorMode} size="xs">
						{colorMode == 'dark' ? '🌞' : '🌜'}
					</Button>,
					// <StyledLink href="/logout">Logout</StyledLink>,
					// <Avatar size="xs" />,
				]}
			/>
			{/* mt 4.5 is needed to offset the navbar */}
			<Box as="main" mt="4.5rem" p={2}>
				{withContainer ? (
					<Container maxW="1200px" {...rest} />
				) : (
					<Flex {...rest}></Flex>
				)}
			</Box>
		</Box>
	);
};

export default Layout;
