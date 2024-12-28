import { gql } from 'graphql-request';

export const MUTATION_INSERT_SET = gql`
	mutation InsertSet(
		$exercise: String!
		$reps: Int!
		$weight: Float!
		$user_id: String!
	) {
		insertSets(
			exercise: $exercise
			reps: $reps
			weight: $weight
			user_id: $user_id
		) {
			user_id
		}
	}
`;
