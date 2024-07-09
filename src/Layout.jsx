import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'

function Layout() {
    const router = createBrowserRouter ([
        {
            path: '/',
            element: <Signup />
        },

        {
            path: '/login',
            element: <Login />
        },
    ])

    return (
        <RouterProvider router = {router}/>
    )
}

export default Layout