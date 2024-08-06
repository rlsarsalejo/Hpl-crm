import { createBrowserRouter } from "react-router-dom";
import LoginPage from '@/views/auth/Login'
import GuestLayout from "@/components/GuestLayout";
import AuthenticatedUsers from '@/components/AuthenticatedLayout'
import Dashboard from '@/views/dashboard/Homepage'
import Events from "@/views/dashboard/Events";
import Sidebar from '@/components/Navbars/Sidebar'
const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children:[
            {
                path: '/',
                element: <LoginPage />
            }
        ]

    },
    {
        path: '/',
        element: <AuthenticatedUsers />,
        children:[
            {
                path:'/homepage',
                element: <Dashboard />
            },
            {
                path:'/events',
                element: <Events />
            }
        ]
    }

])

export default router;