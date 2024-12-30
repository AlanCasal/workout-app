import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Redirect, Stack } from 'expo-router';
import useAuthContext from '@/src/context/AuthContext/useAuthContext';

const Auth = () => {
	const [usernameInput, setUsernameInput] = useState('');

	const { onLogin, username } = useAuthContext();

	const handleSignIn = () => {
		if (!usernameInput) return Alert.alert('Username is required');

		onLogin(usernameInput);
	};

	if (username) return <Redirect href="/" />;

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Auth',
				}}
			/>
			<Text style={styles.label}>Username</Text>
			<TextInput
				style={styles.input}
				value={usernameInput}
				onChangeText={setUsernameInput}
				placeholder="Username"
				autoCapitalize="none"
				autoComplete="off"
				textContentType="none"
				autoCorrect={false}
			/>
			<Button
				title="Sign In"
				onPress={handleSignIn}
				disabled={!usernameInput}
			/>
		</View>
	);
};

export default Auth;
