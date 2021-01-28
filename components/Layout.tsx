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
				<title>91wal</title>
				<link rel="icon" href="/favicon.ico" />
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
