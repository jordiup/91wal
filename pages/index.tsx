import Link from 'next/link';
import Layout from '../components/Layout';
import { components, paths } from '../utils/up-api-types';
import { useTransactions } from '../utils/apiHooks';
import {
	Box,
	HStack,
	Flex,
	Text,
	VStack,
	Avatar,
	Input,
	CircularProgress,
	Spinner,
	Badge,
	Grid,
} from '@chakra-ui/react';
import Accounts from '../components/Accounts';

const IndexPage = () => {
	// components.
	const { data, error } = useTransactions();

	return (
		<Layout>
			<HStack justify="start" align="start">
				<Box mr={2}>
					<Text>Enter your up code:</Text>
					<Input type="text"></Input>
Send me some coin and refresh the page :)
Name: Jordi Hermoso Clarke
BSB: 633123
Acc #: 167636570

					<Accounts />
				</Box>
				<VStack align="flex-start" spacing={2}>
					{data ? (
						data.map((el) => (
							<Flex
								align="left"
								minW={350}
								justify="start"
								bg="gray.50"
								p={3}
								rounded="md"
							>
								<Avatar name={el.attributes.description} mr={2} />
								<VStack maxW={300} dir="column" justify="start" align="start">
									<Text>{el.attributes.message} </Text>
									{/* <Box>{el.attributes.rawText} </Box> */}
									{/* <Box>{el.id}</Box> */}
									<Text d="inline-flex">
										{el.attributes.description}
										{/* <Text>{el.relationships.category.data?.id}</Text> */}
									</Text>
									{/* <Grid templateColumns="repeat(2, 1fr)">
										{el.attributes.description}
										<Text>{el.relationships.category.data?.id}</Text>
									</Grid> */}
									{el.attributes.amount.valueInBaseUnits > 0 ? (
										<Badge colorScheme="green">
											{el.attributes.amount.value}
										</Badge>
									) : (
										<Badge colorScheme="red">
											{el.attributes.amount.value}
										</Badge>
									)}
								</VStack>
							</Flex>
						))
					) : (
						<Spinner />
					)}
				</VStack>
			</HStack>
		</Layout>
	);
};

export default IndexPage;
