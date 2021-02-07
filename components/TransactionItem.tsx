import React from 'react';
import { Components } from '../utils/up-client';
import {
	Flex,
	Avatar,
	VStack,
	Badge,
	Text,
	useColorMode,
	Tag,
	TagLabel,
	Box,
	SkeletonCircle,
	SkeletonText,
} from '@chakra-ui/react';
import FlexCard from './FlexCard';
import { format } from 'date-fns';
import MoneyBadge from './MoneyBadge';

interface Props {
	transaction?: Components.Schemas.TransactionResource;
	loading?: boolean;
}

const TransactionItem = ({ transaction, loading }: Props) => {
	if (transaction && !loading) {
		return (
			<FlexCard align="left" minW={350} justify="start">
				<Avatar name={transaction.attributes.description} mr={2} />
				<VStack maxW={300} dir="column" justify="start" align="start">
					<Text>{transaction.attributes.description} </Text>
					{/* <Box>{transaction.attributes.rawText} </Box> */}
					{/* <Box>{transaction.id}</Box> */}
					<Text d="inline-flex">
						<Text mr={2} color="gray.500">
							{format(new Date(transaction.attributes.createdAt), 'dd/MM')}
							{/* <Tag size="sm" variant="outline" colorScheme="blue" w="min-content">
							<TagLabel>
								{new Date(transaction.attributes.createdAt).toDateString()}
							</TagLabel>
						</Tag> */}
						</Text>
						<Text>{transaction.attributes.message}</Text>
					</Text>
					{/* <Grid templateColumns="repeat(2, 1fr)">
										{transaction.attributes.description}
										<Text>{transaction.relationships.category.data?.id}</Text>
									</Grid> */}
					<MoneyBadge
						transactionAmountString={transaction.attributes.amount.value}
					/>
				</VStack>
			</FlexCard>
		);
	} else
		return (
			<Box padding="6" boxShadow="lg" minW={350} roudned="md">
				<SkeletonCircle size="10" />
				<SkeletonText mt="4" noOfLines={3} spacing="4" />
			</Box>
		);
};

export default TransactionItem;
