import React from 'react';
import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';

const FlexCard = (props: FlexProps) => {
	const { colorMode } = useColorMode();

	return (
		<Flex
			p={3}
			rounded="lg"
			bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
			color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
			{...props}
		/>
	);
};

export default FlexCard;
