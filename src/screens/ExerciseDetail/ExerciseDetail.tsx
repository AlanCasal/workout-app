import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { colors } from '@/src/utils/colors';
import { useExerciseByName } from '@/src/hooks/queries/useExerciseByName';
import Sets from '@/src/components/Sets';
import { ExerciseDetailItem } from '@/src/types/exercise';
import useAuthContext from '@/src/context/AuthContext/useAuthContext';

const Header = ({ exercise }: { exercise: ExerciseDetailItem }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const { username } = useAuthContext();

	if (!username) return <Redirect href="/auth" />;

	return (
		<View>
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
		</View>
	);
};

const ExerciseDetail = () => {
	const { name } = useLocalSearchParams<{ name: string }>();
	const { data, isLoading, error } = useExerciseByName(name);

	if (isLoading) return <ActivityIndicator size="large" color={colors.black} />;
	if (error) return <Text>Error: {error.message}</Text>;

	const exercise = data?.exercises[0];
	if (!exercise) return <Text>Exercise not found</Text>;

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: exercise.name }} />

			<Header exercise={exercise} />

			<Sets exerciseName={exercise.name} />
		</View>
	);
};

export default ExerciseDetail;
