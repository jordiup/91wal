import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../utils/up-client';
import api from '../../utils/api';
import auth0 from '../../utils/auth0';
import TransactionItem from '../../components/TransactionItem';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await api.init<Client>();
	const authRes = await auth0.getSession(req);
	const hasUser = authRes && authRes.user;

	if (req.method === 'GET') {
		try {
			const resp = await client.getTransactions();
			let data = resp.data.data;
			if (!hasUser)
				data = data.map((transaction) => {
					return {
						...transaction,
						attributes: {
							...transaction.attributes,
							// Used to mask transaction descriptions unless logged in
							description: 'xxxxxx-xxxxxx',
							rawText: '',
						},
					};
				});
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ statusCode: 500, message: error.message });
		}
	}
};

export default handler;
