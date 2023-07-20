import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import AxiosProducts from "../Pages/All Product";
import Home from "../Pages/Home";
import ProductDetail from "../Pages/ProductDetails";
import ProfileUpdate from "../Authentication/ProfileUpdate";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/product",
    element: <AxiosProducts />,
  },
  {
    id: 3,
    path: "/productdetail/:id",
    element: <ProductDetail />,
  },
  {
    id: 4,
    path: "/signup",
    element: <SignUp />,
  },
  {
    id: 5,
    path: "/signin",
    element: <Login />,
  },
  {
    id: 6,
    path: "/profile",
    element: <ProfileUpdate />,
  },
];
export default routes;
