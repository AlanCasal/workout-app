import { Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Link } from 'expo-router';
import { ExerciseListItem as ExerciseListItemType } from '@/src/types';

const ExerciseListItem = ({ exercise }: { exercise: ExerciseListItemType }) => {
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
