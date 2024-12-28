import { ExerciseListItem, ExerciseDetailItem } from './exercise';
import { Set } from './set';

export interface ExercisesListResponse {
	exercises: ExerciseListItem[];
}

export interface ExerciseDetailResponse {
	exercises: ExerciseDetailItem[];
}

export interface InsertSetResponse {
	user_id: string;
}

export interface SetsResponse {
	setsByUser_idAndExercise: Set[];
}
