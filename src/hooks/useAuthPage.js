import { useEffect, useMemo, useState } from 'react'
import { useAuth } from './useAuth'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../services/auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])
	const { mutate, isLoading } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) => {
			AuthService.main(email, password, type)
		},
		onSuccess: () => {
			setTimeout(() => {
				setIsAuth(true)
				reset()
			}, 1000)
		}
	})

	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
