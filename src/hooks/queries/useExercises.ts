import { useQuery } from '@tanstack/react-query';
import { QUERY_EXERCISES } from '@/src/graphql/queries';
import client from '@/src/graphql/client';
import { ExercisesListResponse } from '@/src/types';

export const useExercises = (search: string) => {
	return useQuery({
		queryKey: ['exercises', search],
		queryFn: () =>
			client.request<ExercisesListResponse>(QUERY_EXERCISES, {
				name: search,
			}),
	});
};
