import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MUTATION_INSERT_SET } from '@/src/graphql/mutations/sets';
import { Set } from '@/src/types/set';
import client from '@/src/graphql/client';
import { InsertSetResponse } from '@/src/types/api';

export const useInsertSet = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (newSet: Set) =>
			client.request<InsertSetResponse>(MUTATION_INSERT_SET, newSet),
		onSuccess: (_, newSet) => {
			queryClient.invalidateQueries({
				queryKey: ['sets', newSet.exercise],
			});
		},
	});
};
