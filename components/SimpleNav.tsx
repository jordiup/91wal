import { chakra, Flex, Heading, Link, useColorMode } from '@chakra-ui/react';
import React from 'react';

interface Props {
	title?: string;
	homeLink?: string;
	navlinks?: NavLink[];
	ctaItems?: React.ReactNode[];
}

interface NavLink {
	text: string;
	path: string;
	action?: () => void;
}

export const SimpleNav = (props: Props) => {
	const {} = useColorMode();
	return (
		<chakra.header w="full" h="4.5rem" pos="fixed" top="0" left="0" p={3}>
			<Flex w="100%" h="100%" flexDir="row" alignItems="center" px={5}>
				{/* Title/logo */}
				<Link
					href={props.homeLink ? props.homeLink : ''}
					d="flex"
					alignItems="center"
					mr={4}
				>
					{props.title && (
						<Heading
							size="md"
							bgGradient="linear(to-l, #28cabf,#b4ff00)"
							bgClip="text"
						>
							{props.title}
						</Heading>
					)}
				</Link>

				{/* Nav items */}
				<Flex w="100%" justify="start">
					{props.navlinks &&
						props.navlinks.length > 0 &&
						props.navlinks.map((navLink, i) => (
							<Link href={navLink.path} mr={3} key={i}>
								{navLink.text}
							</Link>
						))}
				</Flex>

				{/* CTA Items on RHS */}
				<Flex w="100%" justify="flex-end" alignItems="center">
					{props.ctaItems?.map((ctaItem, i) => (
						<React.Fragment key={i}>{ctaItem}</React.Fragment>
					))}
				</Flex>
			</Flex>
		</chakra.header>
	);
};
