import { initAuth0 } from '@auth0/nextjs-auth0';

// Try extract the value from .env.local or return empty string
function getServerSetting(environmentVariable: string, defaultValue?: string) {
	// Safely check if .env is available
	if (typeof window === 'undefined') {
		return process.env[environmentVariable] || '';
	}

	return defaultValue || '';
}

const auth0 = initAuth0({
	clientId: getServerSetting('AUTH0_CLIENT_ID'),
	clientSecret: getServerSetting('AUTH0_CLIENT_SECRET'),
	scope: 'openid profile email',
	domain: getServerSetting('AUTH0_DOMAIN'),
	redirectUri: getServerSetting('ENV_ORIGIN') + 'api/callback',
	postLogoutRedirectUri: getServerSetting('ENV_ORIGIN') + '',
	session: {
		cookieSecret: getServerSetting('SESSION_COOKIE_SECRET'),
		cookieLifetime: 7200,
		storeIdToken: false,
		storeRefreshToken: false,
		storeAccessToken: false,
	},
});

export default auth0;
