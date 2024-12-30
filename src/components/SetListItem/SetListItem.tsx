import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Set } from '@/src/types';
import { formatDistanceToNow } from 'date-fns';

const SetListItem = ({ item }: { item: Set }) => {
	const formattedDate = formatDistanceToNow(item.created_at);

	return (
		<View style={styles.set}>
			<Text style={styles.reps}>
				{item.reps} x {item.weight}
			</Text>
			<Text style={styles.date}>{formattedDate}</Text>
		</View>
	);
};

export default SetListItem;
