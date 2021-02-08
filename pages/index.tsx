import { Center, Spinner, VStack, Box, Stack } from '@chakra-ui/react';
import Accounts from '../components/Accounts';
import Layout from '../components/Layout';
import TransactionItem from '../components/TransactionItem';
import { useTransactions } from '../utils/apiHooks';
import NextPayment from '../components/NextPayment';
import NextBin from '../components/NextBin';
import AccountDetails from '../components/AccountDetails';

const IndexPage = () => {
	// components.
	const { data, error } = useTransactions();

	return (
		<Layout withContainer>
			<Center
				justify="start"
				alignItems="start"
				dir="H"
				flexDir={{ base: 'column', md: 'row' }}
				gridGap={5}
			>
				<Stack spacing={4}>
					<Accounts />
					<AccountDetails p={0} />
					<NextPayment />
					<NextBin />
				</Stack>
				<VStack align="flex-start" spacing={2} minW={250}>
					{data
						? data.map((el) => <TransactionItem transaction={el} />)
						: [1, 2, 3].map(() => <TransactionItem loading />)}
				</VStack>
			</Center>
		</Layout>
	);
};

export default IndexPage;
