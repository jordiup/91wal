import { Badge, BadgeProps } from '@chakra-ui/react';
import React from 'react';

interface Props {
	transactionAmountString: string;
}

const MoneyBadge = ({
	transactionAmountString,
	...rest
}: Props & BadgeProps) => {
	const isNegative = transactionAmountString.charAt(0) === '-';

	return (
		<>
			{isNegative ? (
				<Badge {...rest} colorScheme="red">
					{transactionAmountString}
				</Badge>
			) : (
				<Badge {...rest} colorScheme="green">
					{transactionAmountString}
				</Badge>
			)}
		</>
	);
};

export default MoneyBadge;
