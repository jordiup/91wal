import { Box, Container, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

interface Props {
	withContainer?: boolean;
	children?: React.ReactNode;
}

/**
 * Layout composes SimpleNavbar and justifies children content
 * @param param0
 */

const Layout: React.FC<Props> = (props: Props) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box>
			<Head>
				<meta
					property="og:image"
					content="https://og-image.now.sh/%F0%9F%98%9B%F0%9F%98%9B%F0%9F%98%9B%E2%9C%85%F0%9F%92%B8%F0%9F%92%AA.png?theme=dark&md=1&fontSize=175px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=0&heights=0"
				/>
				<title>91wal</title>
				<link
					rel="icon"
					href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/check-mark-button_2705.png"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			{/* <SimpleNavbar
        title="PLEXIMUS"
        navlinks={[
          { path: "/", text: "Items" },
          { path: "/contacts", text: "Contacts" },
          { path: "/companies", text: "Companies" },
          { path: "/product-ranges", text: "Product Ranges" },
        ]}
        ctaItems={[
          <Button onClick={toggleColorMode} size="xs">
            {colorMode == "dark" ? "🌞" : "🌜"}
          </Button>,
          <StyledLink href="/logout">Logout</StyledLink>,
          <Avatar size="xs" />,
        ]}
      /> */}
			{/* mt 4.5 is needed to offset the navbar */}
			<Box as="main" mt="4.5rem" p={2}>
				{props.withContainer ? (
					<Container maxW="1200px">{props.children}</Container>
				) : (
					props.children
				)}
			</Box>
		</Box>
	);
};

export default Layout;
