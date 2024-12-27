import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => (
	<Stack>
		<Stack.Screen name="index" options={{ title: 'Exercises' }} />
	</Stack>
);

export default RootLayout;
