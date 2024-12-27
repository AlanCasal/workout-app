import { Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Exercise } from '@/src/utils/types';
import { Link } from 'expo-router';

const ExerciseListItem = ({ exercise }: { exercise: Exercise }) => {
	return (
		<Link href={`/${exercise.name}`} asChild>
			<Pressable style={styles.exerciseContainer}>
				<Text style={styles.title}>{exercise.name}</Text>

				<Text style={styles.subtitleWrapper}>
					<Text style={styles.subtitleText}>{exercise.muscle}</Text> |{' '}
					<Text style={styles.subtitleText}>{exercise.equipment}</Text>
				</Text>
			</Pressable>
		</Link>
	);
};

export default ExerciseListItem;
