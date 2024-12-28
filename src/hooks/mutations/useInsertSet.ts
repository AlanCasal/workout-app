import { useMutation } from '@tanstack/react-query';
import { MUTATION_INSERT_SET } from '@/src/graphql/mutations/sets';
import { Set, InsertSetResponse } from '@/src/types/set';
import client from '@/src/graphql/client';

export const useInsertSet = () => {
	return useMutation({
		mutationFn: (newSet: Set) =>
			client.request<InsertSetResponse>(MUTATION_INSERT_SET, newSet),
	});
};
