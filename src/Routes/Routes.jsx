import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import AddReview from "../Pages/AddReview";
import AddProduct from "../Components/AddProduct";
import ManageProduct from "../Components/ManageProduct";
import UpdateProduct from "../Components/UpdateProduct";
import ProductCards from "../Components/ProductCards";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRouteForAdmin from "./PrivateRouteForAdmin";
import Cart from "../Components/Cart";
import Review from "../Pages/Review";
import MyReview from "../Pages/MyReview";
import Success from "../Pages/Success";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCards />,
            loader: () => fetch('https://gadget-builder-server.vercel.app/product'),
          },
          {
            path: '/category/:category',
            element: <ProductCards />,
            loader: () => fetch('https://gadget-builder-server.vercel.app/product'),
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard',
            element: <Cart />,
            loader: () => fetch(`https://gadget-builder-server.vercel.app/cart`)
          },
          {
            path: '/dashboard/cart',
            element: <Cart />,
            loader: () => fetch(`https://gadget-builder-server.vercel.app/cart`)
          },

        ]
      },
      {
        path: '/product/:id',
        element: <PrivateRoutes>
          <ProductDetails />
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://gadget-builder-server.vercel.app/product/${params.id}`)
      },
      {
        path: '/addProduct',
        element: <PrivateRouteForAdmin>
          <AddProduct />
        </PrivateRouteForAdmin>
      },
      {
        path: '/manageProduct',
        element: <PrivateRouteForAdmin>
          <ManageProduct />
        </PrivateRouteForAdmin>,
        loader: () => fetch('https://gadget-builder-server.vercel.app/product')
      },
      {
        path: 'updateProduct/:id',
        element: <PrivateRouteForAdmin>
          <UpdateProduct />
        </PrivateRouteForAdmin>,
        loader: ({ params }) => fetch(`https://gadget-builder-server.vercel.app/product/${params.id}`)
      },
      {
        path: 'review',
        element: <Review />,
        loader: () => fetch('https://gadget-builder-server.vercel.app/review')
      },
      {
        path: 'addReview',
        element: <PrivateRoutes>
          <AddReview />
        </PrivateRoutes>,
      },
      {
        path: 'myReview',
        element: <PrivateRoutes>
          <MyReview />
        </PrivateRoutes>,
        loader: () => fetch('https://gadget-builder-server.vercel.app/review')
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/success',
        element: <Success />
      }
    ]
  },
]);

export default routes;