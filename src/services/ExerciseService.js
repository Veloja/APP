const EXERCISES_KEY = 'exercises'

export const getExercises = () => {
	return JSON.parse(localStorage.getItem(EXERCISES_KEY)) || []
}

export const createExercise = (exercise) => {
	let newExercse = {
		...exercise, 
		id: getExercises().length
	}
	localStorage.setItem(EXERCISES_KEY, toJson([...getExercises(), newExercse]))
	return newExercse.id
}

export const updateExercise = (updatedExercise) => {
	const updatedExercises = getExercises().map((exercise) => 
			exercise.id === updatedExercise.id ? updatedExercise : exercise
	)
	localStorage.setItem(EXERCISES_KEY, toJson([...updatedExercises]))
}

export const deleteExercise = (exerciseToDelete) => {
	const updatedExercises = getExercises().filter(exercise => 
		exerciseToDelete.id === exercise.id
	)
	localStorage.setItem(EXERCISES_KEY, toJson([...updatedExercises]))
}

export const clearAll = () => {
	localStorage.clear()
}

const toJson = (data) => JSON.stringify(data)