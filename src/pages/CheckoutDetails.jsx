import React, { Suspense, useState, useMemo, useEffect } from "react";
import {
    useLocation,
    Link,
    Await,
    useLoaderData,
    NavLink,
    Outlet,
    useNavigate,
} from "react-router-dom";
import {
    fetchCheckoutCar,
    addToPurchasedItem,
    removeFromCart,
} from "../api/api";
import Loading from "../components/Loading";
import LazyImg from "../components/LazyImg";
import ErrorPage from "../pages/ErrorPage";
import { useCart } from "../components/CartContext";

export async function loader({ params }) {
    return {
        checkoutCar: fetchCheckoutCar(params.id),
    };
}

export default function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();
    const backLink = location.state ? location.state.from : "/cars";
    const backLinkName =
        backLink === "/cart" ? "cart" : location.state?.carName || "all cars";
    const checkoutLoaderData = useLoaderData();
    useEffect(() => {
        setTimeout(() => {
            document.getElementById("checkOutFormTitle")
                ? document
                      .getElementById("checkOutFormTitle")
                      .scrollIntoView({ behavior: "smooth" })
                : null;
        }, 500);
    }, []);
    function renderCarCheckoutElement(checkoutCar) {
        const { cartItems, setCartItems } = useCart();
        const [pauseState, setPauseState] = useState(false);
        const countryCityMap = {
            USA: ["New York", "Los Angeles", "Chicago"],
            Pakistan: ["Karachi", "Lahore", "Islamabad"],
            UK: ["London", "Manchester", "Liverpool"],
        };
        const shippingMethods = ["Standard", "Express"];
        const [formData, setFormData] = useState({
            fullName: "",
            address: "",
            country: "",
            city: "",
            phone: "",
            shipping: "Standard",
            cardName: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
        });
        const [errors, setErrors] = useState({});
        const cities = countryCityMap[formData.country] || [];
        const validate = () => {
            const newErrors = {};
            if (!formData.fullName.trim())
                newErrors.fullName = "Full name is required.";
            if (!formData.address.trim())
                newErrors.address = "Address is required.";
            if (!formData.country) newErrors.country = "Select a country.";
            if (!formData.city) newErrors.city = "Select a city.";
            const phoneRegex = /^\+?[0-9]{7,15}$/;
            if (!phoneRegex.test(formData.phone))
                newErrors.phone = "Enter a valid phone number.";
            if (!formData.shipping)
                newErrors.shipping = "Select a shipping method.";
            // Payment validation
            if (!formData.cardName.trim())
                newErrors.cardName = "Cardholder name is required.";
            const cardNumberRegex = /^\d{16}$/;
            if (!cardNumberRegex.test(formData.cardNumber))
                newErrors.cardNumber = "Card number must be 16 digits.";
            const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!expiryRegex.test(formData.expiry))
                newErrors.expiry = "Expiry must be in MM/YY format.";
            const cvvRegex = /^\d{3}$/;
            if (!cvvRegex.test(formData.cvv))
                newErrors.cvv = "CVV must be 3 digits.";
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };
        function isInCart(carId) {
            return cartItems.some((item) => item.id === carId);
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            if (validate()) {
                const order = {
                    id: crypto.randomUUID(),
                    orderedItemId: checkoutCar.cars.id,
                    estimatedDeliveryDate: estimatedDelivery,
                    orderDate: today,
                    orderTotalPrice: totalPrice,
                    orderDetails: formData,
                    orderedItem: checkoutCar.cars,
                    createdAt: new Date().toISOString(),
                };
                async function addingPurchasingItem(order) {
                    setPauseState(true);
                    try {
                        const responseOfPurchase = await addToPurchasedItem(
                            order
                        );
                        isInCart(order.orderedItem.id)
                            ? await removeFromCart(order.orderedItem.id)
                            : null;
                        setCartItems((prevStateCartItem) => {
                            return prevStateCartItem.filter((stateCartItem) => {
                                return (
                                    stateCartItem.id !== order.orderedItem.id
                                );
                            });
                        });
                    } catch (error) {
                        console.log(error);
                    } finally {
                        setPauseState(false);
                        navigate(`/thankyou/${order.id}`, { replace: true });
                    }
                }

                addingPurchasingItem(order);
            }
        };
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        };
        const today = new Date().toISOString().split("T")[0];
        const { estimatedStandardDelivery, estimatedExpressDelivery } =
            useMemo(() => {
                return {
                    estimatedStandardDelivery: new Date(
                        Date.now() +
                            (30 + Math.floor(Math.random() * 10)) * 86400000
                    ).toDateString(),
                    estimatedExpressDelivery: new Date(
                        Date.now() +
                            (15 + Math.floor(Math.random() * 10)) * 86400000
                    ).toDateString(),
                };
            }, []);
        const estimatedDelivery =
            formData.shipping.toLowerCase() === "standard" ||
            formData.shipping.trim() === ""
                ? estimatedStandardDelivery
                : estimatedExpressDelivery;
        const shippingCost =
            formData.shipping.toLowerCase() === "standard" ||
            formData.shipping.toLowerCase() === " "
                ? checkoutCar.cars.price - checkoutCar.cars.price * 0.9
                : checkoutCar.cars.price - checkoutCar.cars.price * 0.7;
        const taxCost = checkoutCar.cars.price - checkoutCar.cars.price * 0.6;
        const totalPrice = taxCost + shippingCost + checkoutCar.cars.price;
        const handleScrollToBottom = () => {
            setTimeout(() => {
                document
                    .getElementById("featureScrollerID")
                    .scrollIntoView({ behavior: "smooth" });
            }, 500); // adjust timing if needed
        };
        const selectedLinkStyles = {
            color: "#161616",
            fontWeight: 700,
            textDecoration: "underline",
        };
        return (
            <div className="summaryWrapper">
                <div className="summaryCarLeft">
                    <div className="carByIDContainer">
                        <div className="carDetailImg">
                            <LazyImg
                                src={checkoutCar.cars.img}
                                alt={checkoutCar.cars.name}
                                containerWidth={"600px"}
                                containerHeight={"375px"}
                            />
                        </div>
                        <div className="carDetailInfo">
                            <h3>{checkoutCar.cars.name}</h3>
                            <h4 id="featureScroller">
                                Price: {checkoutCar.cars.price.toLocaleString()}
                                $
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="summaryCarRight">
                    <div className="carDetailDesc" id="featureScrollerID">
                        <div className="carDetailDescLinks">
                            <NavLink
                                to="."
                                end
                                state={location.state}
                                style={({ isActive }) =>
                                    isActive ? selectedLinkStyles : null
                                }
                                onClick={handleScrollToBottom}
                            >
                                Description
                            </NavLink>
                            <NavLink
                                to="specifications"
                                state={location.state}
                                style={({ isActive }) =>
                                    isActive ? selectedLinkStyles : null
                                }
                                onClick={handleScrollToBottom}
                            >
                                Specifications
                            </NavLink>
                            <NavLink
                                to="features"
                                state={location.state}
                                style={({ isActive }) =>
                                    isActive ? selectedLinkStyles : null
                                }
                                onClick={handleScrollToBottom}
                            >
                                Features
                            </NavLink>
                        </div>
                        <div className="carDetailInformation">
                            <Outlet context={checkoutCar.cars} />
                        </div>
                    </div>
                </div>
                <div className="summayCarFormContainer">
                    <h2 className="checkoutPageHeading" id="checkOutFormTitle">
                        Checkout Form:
                    </h2>
                    <div className="summaryCarMid">
                        <div className="container">
                            <div className="card cart">
                                <div className="steps">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="summaryInfoForm form"
                                    >
                                        <div className="step">
                                            <div className="formInputsWrappers">
                                                <span>SHIPPING DETAILS</span>
                                                <div className="summaryFormInputContainer">
                                                    <label>Full Name :</label>
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        className="input_field"
                                                        placeholder="Jhon Doe."
                                                        value={
                                                            formData.fullName
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                    {errors.fullName && (
                                                        <p
                                                            style={{
                                                                color: "#ff3860",
                                                            }}
                                                        >
                                                            {errors.fullName}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="summaryFormInputContainer">
                                                    {" "}
                                                    <label>Address :</label>
                                                    <textarea
                                                        className="input_field"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                        placeholder="221B Baker Street, W1U 8ED, London, United Kingdom"
                                                    />
                                                    {errors.address && (
                                                        <p
                                                            style={{
                                                                color: "#ff3860",
                                                            }}
                                                        >
                                                            {errors.address}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="summaryFormInputWrapper">
                                                    <div className="summaryFormInputContainer">
                                                        <label>Country :</label>
                                                        <select
                                                            name="country"
                                                            className="input_field"
                                                            value={
                                                                formData.country
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                className="input_field"
                                                            >
                                                                Select Country
                                                            </option>
                                                            {Object.keys(
                                                                countryCityMap
                                                            ).map((country) => (
                                                                <option
                                                                    key={
                                                                        country
                                                                    }
                                                                    value={
                                                                        country
                                                                    }
                                                                    className="input_field"
                                                                >
                                                                    {country}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {errors.country && (
                                                            <p
                                                                style={{
                                                                    color: "#ff3860",
                                                                }}
                                                            >
                                                                {errors.country}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="summaryFormInputContainer">
                                                        <label>City :</label>
                                                        <select
                                                            name="city"
                                                            value={
                                                                formData.city
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="input_field"
                                                            disabled={
                                                                !formData.country
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                className="input_field"
                                                            >
                                                                Select City
                                                            </option>
                                                            {cities.map(
                                                                (city) => (
                                                                    <option
                                                                        className="input_field"
                                                                        key={
                                                                            city
                                                                        }
                                                                        value={
                                                                            city
                                                                        }
                                                                    >
                                                                        {city}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                        {errors.city && (
                                                            <p
                                                                style={{
                                                                    color: "#ff3860",
                                                                }}
                                                            >
                                                                {errors.city}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="summaryFormInputContainer">
                                                    <label>
                                                        Phone Number :
                                                    </label>
                                                    <input
                                                        className="input_field"
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+1234567890"
                                                    />
                                                    {errors.phone && (
                                                        <p
                                                            style={{
                                                                color: "#ff3860",
                                                            }}
                                                        >
                                                            {errors.phone}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="summaryFormRadioContainer">
                                                    <label>
                                                        Shipping Method:
                                                    </label>
                                                    {shippingMethods.map(
                                                        (method) => (
                                                            <div
                                                                key={method}
                                                                className="radioContainer"
                                                            >
                                                                <label>
                                                                    {`${method}:`}
                                                                </label>
                                                                <input
                                                                    type="radio"
                                                                    name="shipping"
                                                                    value={
                                                                        method
                                                                    }
                                                                    checked={
                                                                        formData.shipping ===
                                                                        method
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                    {errors.shipping && (
                                                        <p
                                                            style={{
                                                                color: "#ff3860",
                                                            }}
                                                        >
                                                            {errors.shipping}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="formInputsWrappers">
                                                <span>PAYMENT DETAILS</span>
                                                <div className="summaryFormInputContainer">
                                                    <label>
                                                        Cardholder Name:
                                                    </label>
                                                    <input
                                                        placeholder="Jhon Doe."
                                                        type="text"
                                                        className="input_field"
                                                        name="cardName"
                                                        value={
                                                            formData.cardName
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                    {errors.cardName && (
                                                        <p
                                                            style={{
                                                                color: "#ff3860",
                                                            }}
                                                        >
                                                            {errors.cardName}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="summaryFormInputContainer">
                                                    <label>Card Number:</label>
                                                    <input
                                                        type="text"
                                                        className="input_field"
                                                        name="cardNumber"
                                                        value={
                                                            formData.cardNumber
                                                        }
                                                        onChange={handleChange}
                                                        placeholder="1234567812345678"
                                                        maxLength={16}
                                                    />
                                                    {errors.cardNumber && (
                                                        <p
                                                            style={{
                                                                color: "#ff3860",
                                                            }}
                                                        >
                                                            {errors.cardNumber}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="summaryFormInputWrapper">
                                                    <div className="summaryFormInputContainer">
                                                        <label>
                                                            Expiry Date (MM/YY):
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="input_field"
                                                            name="expiry"
                                                            value={
                                                                formData.expiry
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            placeholder="MM/YY"
                                                        />
                                                        {errors.expiry && (
                                                            <p
                                                                style={{
                                                                    color: "#ff3860",
                                                                }}
                                                            >
                                                                {errors.expiry}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="summaryFormInputContainer">
                                                        <label>CVV:</label>
                                                        <input
                                                            type="password"
                                                            placeholder="XXX"
                                                            className="input_field"
                                                            name="cvv"
                                                            value={formData.cvv}
                                                            onChange={
                                                                handleChange
                                                            }
                                                            maxLength={3}
                                                        />
                                                        {errors.cvv && (
                                                            <p
                                                                style={{
                                                                    color: "#ff3860",
                                                                }}
                                                            >
                                                                {errors.cvv}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="payments">
                                                <span>PAYMENT</span>
                                                <div className="details">
                                                    <span>Subtotal:</span>
                                                    <span>
                                                        $
                                                        {checkoutCar.cars.price.toLocaleString()}
                                                    </span>
                                                    <span>Tax:</span>
                                                    <span>
                                                        $
                                                        {taxCost.toLocaleString()}
                                                    </span>
                                                    <span>Shipping Cost:</span>
                                                    <span>
                                                        $
                                                        {shippingCost.toLocaleString()}
                                                    </span>
                                                    <span>
                                                        Estimated Delivery Date:
                                                    </span>
                                                    <span>
                                                        {estimatedDelivery}
                                                    </span>
                                                    <span>Total:</span>
                                                    <span>
                                                        $
                                                        {totalPrice.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="classicBtn"
                                            type="submit"
                                            disabled={pauseState}
                                        >
                                            {pauseState
                                                ? `Purchasing ${checkoutCar.cars.name}...`
                                                : `Procced With Payment`}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="checkOutPage pageContainer">
            <Link
                className="backLink"
                to={backLink}
                state={{
                    ...location.state,
                    prevFromCheckoutQuery: location.state?.prevFromQuery || "",
                    prevFromCheckoutPage: location.state?.prevFromPage || "",
                }}
            >
                <i className="fa fa-arrow-left"></i>
                Back to {backLinkName}
            </Link>
            <h2 className="checkoutPageHeading">Checkout Item:</h2>
            <Suspense fallback={<Loading />}>
                <Await resolve={checkoutLoaderData.checkoutCar}>
                    {renderCarCheckoutElement}
                </Await>
            </Suspense>
        </div>
    );
}
