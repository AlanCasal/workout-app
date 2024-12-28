export type Exercise = {
	name: string;
	muscle: string;
	equipment: string;
	type: string;
	difficulty: string;
	instructions: string;
};

export type ExerciseListItem = Pick<Exercise, 'name' | 'muscle' | 'equipment'>;
export type ExerciseDetailItem = Pick<
	Exercise,
	'name' | 'muscle' | 'equipment' | 'instructions'
>;
