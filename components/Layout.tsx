import {
	Box,
	Container,
	useColorMode,
	Flex,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Portal,
	Avatar,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { SimpleNav } from './SimpleNav';
import { useMe } from '../utils/apiHooks';

interface Props {
	withContainer?: boolean;
}

/**
 * Layout composes SimpleNavbar and justifies children content
 * @param param0
 */

const Layout: React.FC<Props> = ({ withContainer, ...rest }: Props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { data, error } = useMe();

	return (
		<Box>
			<Head>
				{/* Primary */}
				<title>91Wal - Sharehouse Dashboard</title>
				<meta name="title" content="91Wal - Sharehouse Dashboard" />
				<meta
					name="description"
					content="A sharehouse dashboard ⚡️ Displaying account balance, scheduled rent, and recent transactions. Utilizing Up's API.  "
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://91wal.now.sh/" />
				<meta property="og:title" content="91Wal - Sharehouse Dashboard" />
				<meta
					property="og:description"
					content="A sharehouse dashboard ⚡️ Displaying account balance, scheduled rent, and recent transactions. Utilizing Up's API.  "
				/>
				<meta property="og:image" content="/meta-image.png" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://91wal.now.sh/" />
				<meta property="twitter:title" content="91Wal - Sharehouse Dashboard" />
				<meta
					property="twitter:description"
					content="A sharehouse dashboard ⚡️ Displaying account balance, scheduled rent, and recent transactions. Utilizing Up's API.  "
				/>
				<meta property="twitter:image" content="/meta-image.png" />
				<link
					rel="icon"
					href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/check-mark-button_2705.png"
				/>
			</Head>
			<SimpleNav
				title="91Wal"
				// navlinks={[
				// 	{ path: '/', text: 'Items' },
				// ]}
				ctaItems={[
					<Button onClick={toggleColorMode} size="xs" mr={3}>
						{colorMode == 'dark' ? '🌞' : '🌜'}
					</Button>,
					<Menu>
						{data && !data.error ? (
							<MenuButton
								as={Avatar}
								size="sm"
								cursor="pointer"
								src={data.picture || undefined}
								_hover={{ bg: 'teal', boxShadow: 'md' }}
							/>
						) : (
							<CogButton />
						)}
						{/* <CogButton /> */}
						<MenuList>
							<MenuItem>
								<a href="/api/login" style={{ width: '100%' }}>
									Login 🔑
								</a>
							</MenuItem>
							<MenuItem>
								<a href="/api/logout" style={{ width: '100%' }}>
									Logout 🔒
								</a>
							</MenuItem>
						</MenuList>
					</Menu>,
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

const CogButton = () => <MenuButton as={Button} children="⚙️" size="xs" />;

export default Layout;
