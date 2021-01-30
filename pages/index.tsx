import { Center, Spinner, VStack, Box, Stack } from '@chakra-ui/react';
import Accounts from '../components/Accounts';
import Layout from '../components/Layout';
import TransactionItem from '../components/TransactionItem';
import { useTransactions } from '../utils/apiHooks';
import NextPayment from '../components/NextPayment';

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
					<NextPayment />
				</Stack>
				<VStack align="flex-start" spacing={2}>
					{data ? (
						data.map((el) => <TransactionItem transaction={el} />)
					) : (
						<Spinner />
					)}
				</VStack>
			</Center>
		</Layout>
	);
};

export default IndexPage;
