import { gql } from 'graphql-request';

export const QUERY_EXERCISES = gql`
	query exercises($muscle: String, $name: String) {
		exercises(muscle: $muscle, name: $name) {
			name
			muscle
			equipment
		}
	}
`;

export const QUERY_EXERCISE_BY_NAME = gql`
	query exercises($name: String) {
		exercises(name: $name) {
			name
			muscle
			equipment
			instructions
		}
	}
`;

export const QUERY_SETS = gql`
	query sets($user_id: String!, $exercise: String!) {
		setsByUser_idAndExercise(user_id: $user_id, exercise: $exercise) {
			exercise
			reps
			weight
		}
	}
`;
