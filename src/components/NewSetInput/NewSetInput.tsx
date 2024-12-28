import { View, TextInput, Button, Text, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { useInsertSet } from '@/src/hooks/mutations/useInsertSet';

const NewSetInput = ({ exerciseName }: { exerciseName: string }) => {
	const [reps, setReps] = useState('');
	const [weight, setWeight] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);

	const { mutate, isPending, isError, isSuccess } = useInsertSet();

	const handleAddSet = () => {
		if (!reps || !weight)
			return Alert.alert(
				'Failed to add set',
				'Please enter reps and weight values'
			);

		mutate({
			exercise: exerciseName,
			reps: parseInt(reps),
			weight: parseFloat(weight),
			user_id: 'foxOne',
		});

		// TODO: should only clear inputs if mutation is successful
		setReps('');
		setWeight('');
	};

	useEffect(() => {
		if (isSuccess) {
			setShowSuccess(true);
			const timer = setTimeout(() => setShowSuccess(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [isSuccess]);

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TextInput
					placeholder="Reps"
					style={styles.input}
					value={reps}
					onChangeText={setReps}
					keyboardType="numeric"
				/>
				<TextInput
					placeholder="Weight"
					style={styles.input}
					value={weight}
					onChangeText={setWeight}
					keyboardType="numeric"
				/>

				{/* TODO: add spinner within button if isPending */}
				<Button
					title={isPending ? 'Adding...' : 'Add'}
					onPress={handleAddSet}
					disabled={isPending}
				/>
			</View>

			{/* TODO: add vector icons for error and success */}
			{isError && <Text style={styles.error}>Failed to add set</Text>}
			{showSuccess && (
				<Text style={styles.success}>Set added successfully!</Text>
			)}
		</View>
	);
};

export default NewSetInput;
