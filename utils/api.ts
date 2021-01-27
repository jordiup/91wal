import OpenAPIClientAxios from 'openapi-client-axios';

const api = new OpenAPIClientAxios({
	definition: './utils/openapi.json',
	strict: true,
	validate: true,
	withServer: 0,
	axiosConfigDefaults: {
		withCredentials: true,
		headers: {
			'Cache-Control': 'no-cache',
			Authorization: 'Bearer ' + process.env.UP_KEY,
		},
	},
});

export default api;
