import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import ExerciseListItem from '@/src/screens/ExerciseList/ExerciseListItem';
import { useExercises } from '@/src/hooks/queries/useExercises';
import { colors } from '@/src/utils/colors';
import { Redirect, Stack } from 'expo-router';
import useAuthContext from '@/src/context/AuthContext/useAuthContext';
import { useDebounce } from '@uidotdev/usehooks';

const ExerciseList = () => {
	const [search, setSearch] = useState('');
	const debouncedSearchText = useDebounce(search.trim(), 1000);

	const { data, isLoading, error } = useExercises(debouncedSearchText);
	const { username } = useAuthContext();

	if (!username) return <Redirect href="/auth" />;

	if (isLoading) return <ActivityIndicator size="large" color={colors.black} />;

	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					headerSearchBarOptions: {
						placeholder: 'Search...',
						onChangeText: ({ nativeEvent: { text } }) => setSearch(text),
						hideWhenScrolling: false,
					},
				}}
			/>

			<FlatList
				style={styles.flatList}
				data={data?.exercises || []}
				renderItem={({ item }) => <ExerciseListItem exercise={item} />}
				contentContainerStyle={styles.flatListContainer}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				showsVerticalScrollIndicator={false}
				contentInsetAdjustmentBehavior="automatic"
			/>
			<StatusBar style="auto" />
		</View>
	);
};

export default ExerciseList;
