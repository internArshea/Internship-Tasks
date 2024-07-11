import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import UserHome from './components/UserHome'
import Nav from './components/Nav'
import CreatePost from './components/CreatePost'
import ViewPost from './components/ViewPost'
import Comments from './components/Comments'



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

        {
            path: '/homepage/:id',
            element: <UserHome />,
            children: [
                {
                    path: '/homepage/:id/nav',
                    element: <Nav />
                },

                {
                    path: '/homepage/:id/create-post',
                    element: <CreatePost />
                },

                {
                    path: '/homepage/:id/view-post/',
                    element: <ViewPost />,
                    children:[
                        {
                            path: '/homepage/:id/view-post/:id/comments',
                            element: <Comments />
                        }
                    ]
                },
            ]
        },
    ])

    return (
        <RouterProvider router = {router}/>
    )
}

export default Layout