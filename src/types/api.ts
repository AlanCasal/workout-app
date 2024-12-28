import { ExerciseListItem, ExerciseDetailItem } from './exercise';

export interface ExercisesListResponse {
	exercises: ExerciseListItem[];
}

export interface ExerciseDetailResponse {
	exercises: ExerciseDetailItem[];
}
