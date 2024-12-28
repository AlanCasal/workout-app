import { useQuery } from '@tanstack/react-query';
import { QUERY_EXERCISES } from '@/src/graphql/queries';
import client from '@/src/graphql/client';
import { ExercisesListResponse } from '@/src/types';

export function useExercises() {
	return useQuery({
		queryKey: ['exercises'],
		queryFn: () => client.request<ExercisesListResponse>(QUERY_EXERCISES),
	});
}
