import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../utils/up-client';
import api from '../../utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await api.init<Client>();

	if (req.method === 'GET') {
		try {
			const resp = await client.getTransactions();
			res.status(200).json(resp.data.data);
		} catch (error) {
			res.status(500).json({ statusCode: 500, message: error.message });
		}
	}
};

export default handler;
