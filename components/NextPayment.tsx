import React from 'react';
import {
	Flex,
	Stat,
	StatNumber,
	StatHelpText,
	Tag,
	TagLabel,
} from '@chakra-ui/react';
import FlexCard from './FlexCard';
import { differenceInCalendarDays, add, differenceInDays } from 'date-fns';

interface Props {}

const NextPayment = (props: Props) => {
	const basePaymentDate = new Date('1/15/2021');
	// initialise to base date
	let nextPaymentDate = basePaymentDate;

	while (nextPaymentDate < new Date()) {
		nextPaymentDate = add(nextPaymentDate, { weeks: 2 });
	}

	const daysUntilNextPayment = differenceInDays(nextPaymentDate, new Date());

	return (
		<FlexCard flexDir="column">
			<Stat>
				<StatNumber>{daysUntilNextPayment} days</StatNumber>
				<StatHelpText>Until next rent payment</StatHelpText>
			</Stat>
			<Tag size="md" variant="outline" colorScheme="blue" w="min-content">
				<TagLabel>{nextPaymentDate.toDateString()}</TagLabel>
			</Tag>
		</FlexCard>
	);
};

export default NextPayment;
