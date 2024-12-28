import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		gap: 10,
		backgroundColor: colors.white,
	},
	label: {
		fontWeight: '600',
		fontSize: 20,
		color: colors.dimGray,
	},
	input: {
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: colors.dimGray,
		borderRadius: 5,
		padding: 10,
	},
});
