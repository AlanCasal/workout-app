import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
	return (
		<>
			<StatusBar style="dark" />
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</>
	);
};

export default RootLayout;
