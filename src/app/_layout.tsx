import React from 'react';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const RootLayout = () => (
	<QueryClientProvider client={queryClient}>
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Exercises' }} />
		</Stack>
	</QueryClientProvider>
);

export default RootLayout;
