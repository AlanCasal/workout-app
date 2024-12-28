import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

const NewSetInput = () => {
	const [reps, setReps] = useState('');
	const [weight, setWeight] = useState('');

	const handleAddSet = () => {
		console.log('add set', reps, weight);

		// TODO: add set to workout

		setReps('');
		setWeight('');
	};

	return (
		<View style={styles.container}>
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

			<Button title="Add" onPress={handleAddSet} />
		</View>
	);
};

export default NewSetInput;
