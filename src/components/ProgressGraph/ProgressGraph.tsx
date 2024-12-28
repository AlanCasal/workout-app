import { View, Text } from 'react-native';
import React from 'react';
import { LineGraph } from 'react-native-graph';
import { styles } from './styles';
import { colors } from '@/src/utils/colors';

const ProgressGraph = () => {
	const points = [
		{ value: 10, date: new Date('2024-01-01') },
		{ value: 20, date: new Date('2024-01-02') },
		{ value: 16, date: new Date('2024-01-03') },
		{ value: 33, date: new Date('2024-01-04') },
	];
	return (
		<View style={styles.container}>
			<LineGraph
				points={points}
				color={colors.success}
				animated={false}
				style={styles.graph}
			/>
			<Text>Progress Graph</Text>
		</View>
	);
};

export default ProgressGraph;
