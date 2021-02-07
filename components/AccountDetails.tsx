import React from 'react';
import { useAccounts } from '../utils/apiHooks';
import {
	Box,
	Text,
	Stat,
	StatHelpText,
	StatNumber,
	Spinner,
	useClipboard,
	useToast,
	FlexProps,
} from '@chakra-ui/react';
import FlexCard from './FlexCard';
import MoneyBadge from './MoneyBadge';

// interface Props {}

const AccountDetails = (props: FlexProps) => {
	const toast = useToast();

	const { hasCopied, onCopy } = useClipboard(
		`Name: Joshua Milambo
BSB: 633123
Acc #: 180486359`
	);

	const copyFn = () => {
		onCopy();
		toast({ description: 'Details copied' });
	};

	return (
		<FlexCard minHeight="80px" onClick={copyFn} {...props}>
			<Text
				fontFamily="mono"
				fontSize="sm"
				// border="1px solid"
				// borderColor="gray.300"
				// color="gray.700"
				padding={3}
				rounded="md"
				cursor="pointer"
				_hover={{ bg: 'hsla(199, 99%, 80%, 0.273)' }}
			>
				Name: Joshua Milambo
				<br />
				BSB: 633123
				<br />
				Acc #: 180486359
			</Text>
		</FlexCard>
	);
};

export default AccountDetails;
