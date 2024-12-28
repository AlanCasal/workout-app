import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import ExerciseListItem from '@/src/components/ExerciseListItem';
import { useExercises } from '@/src/hooks/queries/useExercises';
import { colors } from '@/src/utils/colors';
import { Redirect } from 'expo-router';
import useAuthContext from '@/src/context/AuthContext/useAuthContext';

const ExerciseList = () => {
	const { data, isLoading, error } = useExercises();
	const { username } = useAuthContext();

	if (!username) return <Redirect href="/auth" />;

	if (isLoading) return <ActivityIndicator size="large" color={colors.black} />;

	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<View style={styles.container}>
			<FlatList
				data={data?.exercises || []}
				renderItem={({ item }) => <ExerciseListItem exercise={item} />}
				contentContainerStyle={styles.flatList}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				showsVerticalScrollIndicator={false}
			/>
			<StatusBar style="dark" />
		</View>
	);
};

export default ExerciseList;
