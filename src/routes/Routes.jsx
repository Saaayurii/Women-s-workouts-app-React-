import { useAuth } from '../hooks/useAuth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes.data'
import NotFound from '../components/screens/not-found/NotFound'
const Router = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{/* TODO: Auth routes */}
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router