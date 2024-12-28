import { Text, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { colors } from '@/src/utils/colors';
import { useSets } from '@/src/hooks/queries/useSets';
import useAuthContext from '@/src/context/AuthContext/useAuthContext';

const SetsList = ({
	exerciseName,
	ListHeaderComponent,
}: {
	exerciseName: string;
	ListHeaderComponent: React.ReactNode;
}) => {
	const { username } = useAuthContext();
	const { data, isLoading, error } = useSets(username, exerciseName);

	if (isLoading) return <ActivityIndicator size="small" color={colors.black} />;
	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<FlatList
			ListHeaderComponent={() => ListHeaderComponent}
			showsVerticalScrollIndicator={false}
			data={data?.setsByUser_idAndExercise}
			renderItem={({ item }) => (
				<Text style={styles.set}>
					{item.reps} x {item.weight}
				</Text>
			)}
		/>
	);
};

export default SetsList;
