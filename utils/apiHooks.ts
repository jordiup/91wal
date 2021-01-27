import useSWR from 'swr';
import {
	Client,
	OperationMethods,
	Paths,
	Components,
} from '../utils/up-client';

export const useTransactions = () =>
	useSWR<Components.Schemas.TransactionResource[]>('/api/transactions');
