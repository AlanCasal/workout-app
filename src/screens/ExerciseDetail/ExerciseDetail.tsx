import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Stack, useLocalSearchParams } from 'expo-router';
import { colors } from '@/src/utils/colors';
import { useExerciseByName } from '@/src/hooks/queries/useExerciseByName';
import NewSetInput from '@/src/components/NewSetInput';

const ExerciseDetail = () => {
	const { name } = useLocalSearchParams<{ name: string }>();
	const { data, isLoading, error } = useExerciseByName(name);

	const [isExpanded, setIsExpanded] = useState(false);

	// TODO: use my custom loading spinner
	if (isLoading) return <ActivityIndicator size="large" color={colors.black} />;
	if (error) return <Text>Error: {error.message}</Text>;

	const exercise = data?.exercises[0];
	if (!exercise) return <Text>Exercise not found</Text>;

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Stack.Screen options={{ title: exercise.name }} />
			<View style={styles.panel}>
				<Text style={styles.title}>{exercise.name}</Text>

				<Text style={styles.subtitleWrapper}>
					<Text style={styles.subtitleText}>{exercise.muscle}</Text> |{' '}
					<Text style={styles.subtitleText}>{exercise.equipment}</Text>
				</Text>
			</View>

			<View style={styles.panel}>
				<Text style={styles.instructions} numberOfLines={isExpanded ? 0 : 3}>
					{exercise.instructions}
				</Text>
				<Text
					style={styles.seeMore}
					onPress={() => setIsExpanded(prev => !prev)}
				>
					{isExpanded ? 'See less' : 'See more'}
				</Text>
			</View>

			<NewSetInput />
		</ScrollView>
	);
};

export default ExerciseDetail;
