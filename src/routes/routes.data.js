import Auth from '../components/screens/Auth/Auth'
import ExerciseLog from '../components/screens/exercise-log/ExerciseLog'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import Workout from '../components/screens/workouts/detail/Workout'
import ListWorkouts from '../components/screens/workouts/list/ListWorkouts'

export const routes = [
	{
		path: '/auth',
		exact: false,
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		exact: true,
		component: Home,
		isAuth: true
	},
	{
		path: '/new-workout',
		exact: false,
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		exact: false,
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/workout/:id',
		exact: false,
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		exact: false,
		component: ListWorkouts,
		isAuth: true
	},
	{
		path: '/exercise/:id',
		exact: false,
		component: ExerciseLog,
		isAuth: true
	}
]
