import { Text, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import client from '@/src/graphql/client';
import { colors } from '@/src/utils/colors';

const setsQuery = gql`
	query MyQuery {
		setsByUser_id(user_id: "foxOne") {
			reps
			weight
			# id
			# user_id
			# exercise
			# created_at
		}
	}
`;

const SetsList = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['sets'],
		queryFn: () => client.request(setsQuery),
	});

	if (isLoading) return <ActivityIndicator size="small" color={colors.black} />;
	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<FlatList
			data={data.setsByUser_id}
			renderItem={({ item }) => (
				<Text style={styles.set}>
					{item.reps} x {item.weight}
				</Text>
			)}
		/>
	);
};

export default SetsList;
