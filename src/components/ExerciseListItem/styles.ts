import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	exerciseContainer: {
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 10,
		gap: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: 500,
	},
	subtitle: {
		color: colors.dimGray,
	},
});
