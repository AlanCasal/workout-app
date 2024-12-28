import React from 'react';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContext from '@/src/context/AuthContext';
import useAuthContextValue from '../context/AuthContext/useAuthContextValue';
const queryClient = new QueryClient();

const RootLayout = () => {
	const authContextValue = useAuthContextValue();

	return (
		<AuthContext.Provider value={authContextValue}>
			<QueryClientProvider client={queryClient}>
				<Stack>
					<Stack.Screen name="index" options={{ title: 'Exercises' }} />
				</Stack>
			</QueryClientProvider>
		</AuthContext.Provider>
	);
};

export default RootLayout;
