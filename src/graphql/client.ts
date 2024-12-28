import { GraphQLClient } from 'graphql-request';

const apiUrl = process.env.EXPO_PUBLIC_STEPZEN_API_URL;
const apiKey = process.env.EXPO_PUBLIC_STEPZEN_API_KEY;

const client = new GraphQLClient(apiUrl, {
	headers: {
		Authorization: `apikey ${apiKey}`,
	},
});

export default client;
