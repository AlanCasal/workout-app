import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Exercise } from '@/src/utils/types';

const ExerciseListItem = ({ exercise }: { exercise: Exercise }) => {
	return (
		<View style={styles.exerciseContainer}>
			<Text style={styles.title}>{exercise.name}</Text>
			<Text style={styles.subtitle}>
				Muscle: {exercise.muscle} | Equipment: {exercise.equipment}
			</Text>
		</View>
	);
};

export default ExerciseListItem;
