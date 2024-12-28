import { useQuery } from '@tanstack/react-query';
import { QUERY_EXERCISE_BY_NAME } from '@/src/graphql/queries';
import client from '@/src/graphql/client';
import { ExerciseDetailResponse } from '@/src/types';

export const useExerciseByName = (name: string) => {
	return useQuery({
		queryKey: ['exercise', name],
		queryFn: () =>
			client.request<ExerciseDetailResponse>(QUERY_EXERCISE_BY_NAME, {
				name,
			}),
	});
};
