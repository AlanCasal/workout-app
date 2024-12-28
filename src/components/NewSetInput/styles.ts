import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 5,
		gap: 10,
	},
	row: {
		flexDirection: 'row',
		gap: 10,
	},
	error: {
		color: colors.error,
	},
	success: {
		color: colors.success,
		marginTop: 5,
	},
	input: {
		borderWidth: StyleSheet.hairlineWidth,
		padding: 10,
		flex: 1,
		borderRadius: 5,
		borderColor: colors.gainsboro,
	},
});
