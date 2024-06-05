import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import DashboardLayOut from "../Layouts/DashboardLayOut";
import PrivateRoute from "./private/PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import AllProducts from "../Pages/AllProducts";
import AddProducts from "../Pages/AddProducts";
import EditProducts from "../Pages/EditProducts";
import PropertDetails from "../Pages/PropertDetails";
import Home from "../Pages/Home";
import EditProfile from "../Pages/EditProfile";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:() =>
                    fetch("http://localhost:5000/properties")
            },
            {
                path: "/products/:id",
                element: <PropertDetails />,
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/properties/${params.id}`),
              },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            
        ]

    },

    // 2nd Object
   {
    path:'dashboard',
    element:<DashboardLayOut/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'home',
            element:(<PrivateRoute>
                <Dashboard/>
            </PrivateRoute>
            ),
        },
        {
            path:'profile/edit/:id',
            element:(<PrivateRoute>
               <EditProfile/>
            </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/user/${params.id}`),
        },
        {
            path: "dashboard/all-products",
            element: (
              <PrivateRoute>
                <AllProducts />
              </PrivateRoute>
            ),
          },
          {
            path: "dashboard/add-products",
            element: (
              <PrivateRoute>
                <AddProducts />
              </PrivateRoute>
            ),
          },
          {
            path: "dashboard/all-products/edit/:id",
            element: (
              <PrivateRoute>
                <EditProducts />
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/properties/${params.id}`),
          },
        ],
      },
    ]);
    