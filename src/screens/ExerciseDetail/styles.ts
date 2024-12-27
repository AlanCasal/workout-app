import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		padding: 10,
		gap: 10,
	},
	panel: {
		backgroundColor: colors.white,
		borderRadius: 5,
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 500,
	},
	subtitleWrapper: {
		color: colors.dimGray,
	},
	subtitleText: {
		textTransform: 'capitalize',
	},
	instructions: {
		marginTop: 10,
		fontSize: 16,
		lineHeight: 22,
	},
});
