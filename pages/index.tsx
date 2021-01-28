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
} from '@chakra-ui/react';

const IndexPage = () => {
	// components.
	const { data, error } = useTransactions();

	return (
		<Layout>
			<HStack justify="start" align="start">
				<Box mr={2}>
					<Text>Enter your up code:</Text>
					<Input type="text"></Input>
				</Box>
				<VStack>
					{data ? (
						data?.map((el) => (
							<Flex align="left">
								<Avatar name={el.attributes.description} mr={2} />
								<VStack maxW={300} dir="column" justify="start" align="start">
									<Box>{el.attributes.message} </Box>
									<Box>{el.attributes.rawText} </Box>
									<Box>{el.id}</Box>
									<Box>{el.attributes.description}</Box>

									<Box>{el.relationships.category.data?.id}</Box>
									<Box>{el.attributes.amount.value}</Box>
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
