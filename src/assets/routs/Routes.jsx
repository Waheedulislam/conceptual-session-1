import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoardLayout from "../layouts/DashBoardLayout";
import PrivateRouts from "./PrivateRouts";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProduct from "../pages/EditProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch("http://localhost:3000/Shoes")
            },
            {
                path: `/products/:id`,
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/Shoes/${params.id}`)
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }, {
                path: '/login',
                element: <Login />
            }, {
                path: '/register',
                element: <Register />
            }
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <Dashboard />,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: (
    //                 <PrivateRouts>
    //                     <DashBoardLayout />
    //                 </PrivateRouts>
    //             ),
    //         },
    //         {
    //             path: '/dashboard/all-Products',
    //             element: <PrivateRouts>
    //                 <AllProducts />
    //             </PrivateRouts>
    //         }
    //     ]
    // }

    {
        path: '/dashboard',
        element: <PrivateRouts>
            <DashBoardLayout />
        </PrivateRouts>
    },
    {
        path: 'dashboard/all-Products',
        element: <PrivateRouts>
            <AllProducts />
        </PrivateRouts>
    },
    {
        path: 'dashboard/add-Products',
        element: <PrivateRouts>
            <AddProducts />
        </PrivateRouts>
    },
    {
        path: 'dashboard/all-products/edit/:id',
        element: (<PrivateRouts >
            <EditProduct></EditProduct>
        </PrivateRouts >
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/Shoes/${params.id}`)
    },

])

export default router;