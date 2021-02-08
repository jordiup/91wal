import useSWR from 'swr';
import {
	Client,
	OperationMethods,
	Paths,
	Components,
} from '../utils/up-client';

export const useTransactions = () =>
	useSWR<Components.Schemas.TransactionResource[]>('/api/transactions');

export const useAccounts = () =>
	useSWR<Components.Schemas.AccountResource[]>('/api/accounts');

interface IMe {
	given_name: string;
	family_name: string;
	nickname: string;
	name: string;
	picture: string;
	locale: string;
	updated_at: Date;
	email: string;
	email_verified: boolean;
	sub: string;
	// Error state
	description?: string;
	error?: string;
}
export const useMe = () => useSWR<IMe>('/api/me');
