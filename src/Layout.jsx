import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import UserHome from './components/UserHome'
import Nav from './components/Nav'
import CreatePost from './components/CreatePost'
import ViewPost from './components/ViewPost'
import CommentSection from './components/CommentSection'
import DisplayComments from './components/DisplayComments'



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
                    element: <ViewPost />
                },
               
            ]
        },
        {
                
            path: '/:id/comments',
            element: <CommentSection />,
            children: [
                {
                    path: ':id/comments/view-comments',
                    element: <DisplayComments />
                }
            ]
        },
    ])

    return (
        <RouterProvider router = {router}/>
    )
}

export default Layout