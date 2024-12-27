import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import exercises from '@/ui/data/exercises.json';
import { Exercise } from '@/src/utils/types';

const Home = () => {
	const exercise: Exercise = exercises[0];

	return (
		<View style={styles.container}>
			<View style={styles.exerciseContainer}>
				<Text style={styles.title}>{exercise.name}</Text>
				<Text style={styles.subtitle}>
					Muscle: {exercise.muscle} | Equipment: {exercise.equipment}
				</Text>
			</View>
		</View>
	);
};

export default Home;
