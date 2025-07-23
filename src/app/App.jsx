import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

// Server Import
import "../server/server";

// Components Imports
import Layout from "../components/Layout";

// Page Imports
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Cars, { loader as CarsLoader } from "../pages/Car/Cars";
import CarDetails, {
    loader as CarDetailsLoader,
} from "../pages/Car/CarDetails";
import CarDetailsDescription from "../components/CarDetailsDescription";
import CarDetailsSpecifications from "../components/CarDetailsSpecifications";
import CarDetailsFeatures from "../components/CarDetailsFeatures";
import Cart, { loader as CartLoader } from "../pages/Cart";
import Checkout, { loader as checkoutLoader } from "../pages/CheckoutDetails";
import ThankYouPage, {
    loader as ThankYouPageLoader,
} from "../pages/ThankYouPage";
import Orders, { loader as OrdersLoader } from "../pages/orders";

// Context Imports
import { cartProvider as CartProvider } from "../components/CartContext";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} errorElement={<ErrorPage />} />
            <Route
                path="about"
                element={<About />}
                errorElement={<ErrorPage />}
            />
            <Route
                path="cars"
                element={<Cars />}
                loader={CarsLoader}
                errorElement={<ErrorPage />}
            />
            <Route
                path="cars/:id"
                element={<CarDetails />}
                loader={CarDetailsLoader}
                errorElement={<ErrorPage />}
            >
                <Route index element={<CarDetailsDescription />} />
                <Route
                    path="specifications"
                    element={<CarDetailsSpecifications />}
                />
                <Route path="features" element={<CarDetailsFeatures />} />
            </Route>
            <Route
                path="checkout/:id"
                element={<Checkout />}
                loader={checkoutLoader}
                errorElement={<ErrorPage />}
            >
                <Route index element={<CarDetailsDescription />} />
                <Route
                    path="specifications"
                    element={<CarDetailsSpecifications />}
                />
                <Route path="features" element={<CarDetailsFeatures />} />
            </Route>
            <Route
                path="thankyou/:id"
                element={<ThankYouPage />}
                loader={ThankYouPageLoader}
                errorElement={<ErrorPage />}
            />
            <Route
                path="orders"
                element={<Orders />}
                loader={OrdersLoader}
                errorElement={<ErrorPage />}
            />
            <Route
                path="cart"
                element={<Cart />}
                loader={CartLoader}
                errorElement={<ErrorPage />}
            />
        </Route>
    )
);

export default function App() {
    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
}
