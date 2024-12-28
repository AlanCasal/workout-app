import { FlatList, ActivityIndicator, Text, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import ExerciseListItem from '@/src/components/ExerciseListItem';
import { useExercises } from '@/src/hooks/queries/useExercises';
import { colors } from '@/src/utils/colors';
import { Redirect, Stack } from 'expo-router';
import useAuthContext from '@/src/context/AuthContext/useAuthContext';
import { useDebounce } from '@uidotdev/usehooks';

const ExerciseList = () => {
	const [search, setSearch] = useState('');
	const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
	const debouncedSearchText = useDebounce(search.trim(), 1000);

	const { data, isLoading, error } = useExercises(debouncedSearchText);
	const { username } = useAuthContext();

	const paddingAnimation = useRef(new Animated.Value(160)).current;
	useEffect(() => {
		Animated.timing(paddingAnimation, {
			toValue: isSearchBarFocused ? 115 : 160,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}, [isSearchBarFocused, debouncedSearchText, paddingAnimation]);

	if (!username) return <Redirect href="/auth" />;

	if (isLoading) return <ActivityIndicator size="large" color={colors.black} />;

	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<Animated.View
			style={{
				...styles.container,
				// TODO: when switching screens, the padding resets but the search bar may still be focused
				paddingTop: paddingAnimation,
			}}
		>
			<Stack.Screen
				options={{
					headerSearchBarOptions: {
						placeholder: 'Search...',
						onChangeText: ({ nativeEvent: { text } }) => setSearch(text),
						hideWhenScrolling: false,
						onFocus: () => setIsSearchBarFocused(true),
						onBlur: () => setIsSearchBarFocused(false),
					},
				}}
			/>

			<FlatList
				data={data?.exercises || []}
				renderItem={({ item }) => <ExerciseListItem exercise={item} />}
				contentContainerStyle={styles.flatList}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				showsVerticalScrollIndicator={false}
			/>
			<StatusBar style="auto" />
		</Animated.View>
	);
};

export default ExerciseList;
