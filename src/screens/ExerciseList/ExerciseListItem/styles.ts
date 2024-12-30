import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	exerciseContainer: {
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 10,
		gap: 5,
		marginHorizontal: 2,

		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
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
});
