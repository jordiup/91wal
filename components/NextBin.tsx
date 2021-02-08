import React from 'react';
import {
	Stat,
	StatNumber,
	StatHelpText,
	Tag,
	TagLabel,
} from '@chakra-ui/react';
import FlexCard from './FlexCard';
import { add, differenceInDays, differenceInWeeks } from 'date-fns';

interface Props {}

const NextBin = (props: Props) => {
	const baseBinDate = new Date('1, 28, 2021');
	let nextBinDate = baseBinDate;

	while (nextBinDate < new Date()) {
		nextBinDate = add(nextBinDate, { weeks: 1 });
	}

	const daysUntilNextBin = differenceInDays(nextBinDate, new Date()) || 0;

	let tagColour = '';
	if (daysUntilNextBin < 3) {
		tagColour = 'red';
	} else {
		tagColour = 'blue';
	}

	let weekDifference = differenceInWeeks(new Date(), baseBinDate);
	let binBoy = '';
	switch (weekDifference % 3) {
		case 0:
			binBoy = 'Jordi';
			break;
		case 1:
			binBoy = 'Hugh';
			break;
		case 2:
			binBoy = 'Josh';
			break;
	}

	return (
		<FlexCard flexDir="column">
			<Stat>
				<StatNumber>{daysUntilNextBin} days</StatNumber>
				<StatHelpText>Until next Uh-Oh Stinky </StatHelpText>
			</Stat>
			<Tag size="md" variant="outline" colorScheme={tagColour} w="min-content">
				<TagLabel>{binBoy}</TagLabel>
			</Tag>
		</FlexCard>
	);
};

export default NextBin;
