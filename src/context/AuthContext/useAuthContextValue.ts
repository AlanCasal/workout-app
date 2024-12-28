import { useState } from 'react';

const INITIAL_USERNAME = '';

const useAuthContextValue = () => {
	const [username, setUsername] = useState(INITIAL_USERNAME);

	const onLogin = (user: string) => {
		setUsername(user);
	};

	const onLogout = () => {
		setUsername(INITIAL_USERNAME);
	};

	return {
		username,
		onLogin,
		onLogout,
	};
};

export default useAuthContextValue;
