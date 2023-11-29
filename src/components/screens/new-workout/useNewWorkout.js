import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import WorkoutService from '../../../services/exercise/workout/workout.service'
import { useMemo } from 'react'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading, isSuccess, error } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => WorkoutService.create(body),
		onSuccess: () => {
			reset({
				name: '',
				exerciseIds: []
			})
		}
	})

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isLoading,
			error,
			isSuccess,
			onSubmit
		}),
		[errors, isSuccess, isLoading, error]
	)
}
