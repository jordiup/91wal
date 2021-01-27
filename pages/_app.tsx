import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
// import Router from 'next/router';
// import { AppState, Auth0Provider } from "@auth0/auth0-react";

// const onRedirectCallback = (appState: AppState) => {
// 	// Use Next.js's Router.replace method to replace the url
// 	Router.replace(appState?.returnTo || '/').catch((err) =>
// 		console.log('Router redirect error', err)
// 	);
// };

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	// 2. Use at the root of your app
	return (
		<ChakraProvider>
			<Component {...pageProps} />{' '}
		</ChakraProvider>
	);
};

export default MyApp;
