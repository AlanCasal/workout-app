import { Text, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { colors } from '@/src/utils/colors';
import { useSets } from '@/src/hooks/queries/useSets';
import useAuthContext from '@/src/context/AuthContext/useAuthContext';
import SetListItem from '../SetListItem';
import { styles } from './styles';
import ProgressGraph from '../ProgressGraph';
import NewSetInput from '../NewSetInput';

const Sets = ({ exerciseName }: { exerciseName: string }) => {
	const { username } = useAuthContext();
	const { data, isLoading, error } = useSets(username, exerciseName);
	const setsData = data?.setsByUser_idAndExercise;

	if (isLoading) return <ActivityIndicator size="small" color={colors.black} />;
	if (error) return <Text>Error: {error.message}</Text>;

	const graphPoints = setsData?.map(set => ({
		value: set.reps * set.weight,
		date: new Date(set.created_at),
	}));

	return (
		<>
			{graphPoints && <ProgressGraph points={graphPoints} />}

			<NewSetInput exerciseName={exerciseName} />

			<FlatList
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}
				data={setsData}
				renderItem={({ item }) => <SetListItem item={item} />}
			/>
		</>
	);
};

export default Sets;
