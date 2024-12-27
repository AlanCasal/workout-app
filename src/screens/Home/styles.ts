import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gainsboro,
		justifyContent: 'center',
		padding: 10,
		gap: 5,
	},
	exerciseContainer: {
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 500,
	},
	subtitle: {
		fontSize: 16,
		fontWeight: 400,
		color: colors.dimGray,
	},
});
