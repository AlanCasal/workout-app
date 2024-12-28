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
