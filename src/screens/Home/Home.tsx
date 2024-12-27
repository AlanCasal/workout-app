import { View, FlatList } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import exercises from '@/ui/data/exercises.json';
import ExerciseListItem from '@/src/components/ExerciseListItem';

const Home = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={exercises}
				renderItem={({ item }) => <ExerciseListItem exercise={item} />}
				contentContainerStyle={styles.flatList}
				keyExtractor={(item, index) => `${item.name}-${index}`}
			/>
			<StatusBar style="dark" />
		</View>
	);
};

export default Home;
