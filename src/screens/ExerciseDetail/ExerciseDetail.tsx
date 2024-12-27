import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Exercise } from '@/src/utils/types';
import exercises from '@/ui/data/exercises.json';

const ExerciseDetail = () => {
	const { name } = useLocalSearchParams<{ name: Exercise['name'] }>();

	const exercise = exercises.find(exerciseItem => exerciseItem.name === name);

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
				<Text style={styles.instructions}>{exercise.instructions}</Text>
			</View>
		</ScrollView>
	);
};

export default ExerciseDetail;
