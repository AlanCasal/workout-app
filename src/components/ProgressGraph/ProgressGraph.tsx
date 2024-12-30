import { View, Text } from 'react-native';
import React from 'react';
import { LineGraph } from 'react-native-graph';
import { styles } from './styles';
import { colors } from '@/src/utils/colors';

type Props = {
	points: { value: number; date: Date }[];
};

const ProgressGraph = ({ points }: Props) => {
	return (
		<View style={styles.container}>
			<Text>Progress Graph</Text>

			<LineGraph
				points={points}
				color={colors.success}
				animated={false}
				style={styles.graph}
			/>
		</View>
	);
};

export default ProgressGraph;
