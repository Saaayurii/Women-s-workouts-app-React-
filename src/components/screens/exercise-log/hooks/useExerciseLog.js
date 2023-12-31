import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useUpdateLogTime } from './useUpdateLogTime'
import { useEffect } from 'react'

export const useExerciseLog = () => {
	const { id } = useParams()
	const [times, setTimes] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
    select: ({data}) => data
	})
	useEffect(() => {
		if (exerciseLog) {
			if (isSuccess && exerciseLog?.times?.length) {
				setTimes(exerciseLog.times)
			}
		}
	}, [exerciseLog])

	const { error, updateTime } = useUpdateLogTime(exerciseLog?.times)

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}
			return time
		})

		setTimes(newTimes)
	}

	const getTime = timeId => {
		return times?.find(time => time.id === timeId) ?? null
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		if (time) {
			updateTime({
				timeId,
				body: {
					isCompleted,
					repeat: +time.repeat,
					weight: +time.weight
				}
			})
		} else {
			console.error(`Time with id ${timeId} not found`)
		}
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		error,
		onChangeState,
		getState
	}
}
