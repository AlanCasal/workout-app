import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gainsboro,
		justifyContent: 'center',
		padding: 10,
	},
	flatList: {
		gap: 5,
	},
});
