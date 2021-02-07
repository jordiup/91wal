import React from 'react';
import { useAccounts } from '../utils/apiHooks';
import {
	Box,
	Text,
	Stat,
	StatHelpText,
	StatNumber,
	Spinner,
	Flex,
} from '@chakra-ui/react';
import FlexCard from './FlexCard';
import MoneyBadge from './MoneyBadge';
import AccountDetails from './AccountDetails';

interface Props {}

const Accounts = (props: Props) => {
	const { data, error } = useAccounts();
	console.log(data);

	return (
		<FlexCard minHeight="80px">
			{data ? (
				data.map((el) => (
					<Flex flexDir="column">
						<Stat>
							<StatHelpText mb={0}>Account balance</StatHelpText>
							<StatNumber>${el.attributes.balance.value}</StatNumber>
						</Stat>
					</Flex>
				))
			) : (
				<Spinner />
			)}
		</FlexCard>
	);
};

export default Accounts;
