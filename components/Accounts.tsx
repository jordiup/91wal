import React from 'react';
import { useAccounts } from '../utils/apiHooks';
import { Box, Text } from '@chakra-ui/react';

interface Props {}

const Accounts = (props: Props) => {
	const { data, error } = useAccounts();
	console.log(data);

	return (
		<Box>
			{data &&
				data.map((el) => (
					<>
						<Text>Account balance: </Text>${el.attributes.balance.value}
					</>
				))}
		</Box>
	);
};

export default Accounts;
