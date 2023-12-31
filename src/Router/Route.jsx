import {createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Donation from '../pages/Donation/Donation';
import Statistics from '../pages/Statistics/Statistics';
import Details from '../pages/Details/Details';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const newCreateRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/", 
                element: <Home></Home>,
                loader: () => fetch('/donationData.json')
            },
            {
                path:"/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/cards/:id",
                element:<Details></Details>,
                loader: () => fetch('/donationData.json')
            },
        ]
    }
])

export default newCreateRoute;