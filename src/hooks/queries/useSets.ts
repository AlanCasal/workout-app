import { useQuery } from '@tanstack/react-query';
import { SetsResponse } from '@/src/types';
import client from '@/src/graphql/client';
import { QUERY_SETS } from '@/src/graphql/queries';

export function useSets(user_id: string, exerciseName: string) {
	return useQuery({
		queryKey: ['sets', exerciseName],
		queryFn: () =>
			client.request<SetsResponse>(QUERY_SETS, {
				user_id,
				exercise: exerciseName,
			}),
	});
}
