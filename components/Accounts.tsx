import React from 'react';
import { useAccounts } from '../utils/apiHooks';
import { Box, Text, Stat, StatHelpText, StatNumber } from '@chakra-ui/react';
import FlexCard from './FlexCard';
import MoneyBadge from './MoneyBadge';

interface Props {}

const Accounts = (props: Props) => {
	const { data, error } = useAccounts();
	console.log(data);

	return (
		<FlexCard>
			{data &&
				data.map((el) => (
					<>
						<Stat>
							<StatHelpText mb={0}>Account balance</StatHelpText>
							<StatNumber>${el.attributes.balance.value}</StatNumber>
						</Stat>
						{/* <Text>Account balance: </Text>${el.attributes.balance.value} */}
					</>
				))}
		</FlexCard>
	);
};

export default Accounts;
