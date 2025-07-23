import React, { Suspense, useRef, useState } from "react";
import {
    useLoaderData,
    Await,
    NavLink,
    Link,
    Outlet,
    useLocation,
    useSearchParams,
    useParams,
} from "react-router-dom";
import {
    fetchCarDetails,
    addToCart,
    fetchCartItems,
    removeFromCart,
} from "../../api/api";
import { useCart } from "../../components/CartContext";
import Loading from "../../components/Loading";
import LazyImg from "../../components/LazyImg";
import CarCard from "../../components/CarCard";
import PopUpCard from "../../components/PopUpCard";

export async function loader({ params }) {
    return {
        data: fetchCarDetails(params.id),
    };
}

export default function CarDetails() {
    const { id } = useParams();
    // Pop Up States
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpType, setPopUpType] = useState();
    const [popSuccess, setPopSucess] = useState(true);
    const [popUpItem, setPopUpItem] = useState();
    //
    const { cartItems, setCartItems } = useCart();
    const [actionMessage, setActionMessage] = useState("");
    const [pauseState, setPauseState] = useState(false);
    const carDetailDataPromise = useLoaderData();
    const location = useLocation();
    const initialStateRef = useRef(location.state);
    const carTrail = location.state?.carTrail || [];
    const carNameTrail = location.state?.carNameTrail || [];
    const previousCarId =
        carTrail.length >= 1 ? carTrail[carTrail.length - 1] : null;
    const previousCarIdName =
        carNameTrail.length >= 1 ? carNameTrail[carNameTrail.length - 1] : null;
    const search =
        initialStateRef.current?.searchParams ||
        initialStateRef.current?.prevFromCheckoutQuery ||
        " ";
    const backLinkPage =
        initialStateRef.current?.from === "/cart"
            ? initialStateRef.current?.from
            : initialStateRef.current?.from === "/orders"
            ? initialStateRef.current?.from
            : initialStateRef.current?.prevFromCheckoutPage || "..";
    const type = initialStateRef.current?.type || "all";
    let actionMessageTimout;
    function isInCart(carId) {
        return cartItems.some((item) => item.id === carId);
    }
    async function removeItemFromCart(cartItem) {
        setPauseState(true);
        setShowPopUp(false);
        setPopUpType("remove");
        setPopUpItem(cartItem);
        try {
            const response = await removeFromCart(cartItem.id);
            displayActionMessage(`✅ ${cartItem.name} Removed From Cart 🛒 !`);
            setCartItems((prevStateCartItem) => {
                return prevStateCartItem.filter((stateCartItem) => {
                    return stateCartItem.id !== cartItem.id;
                });
            });
            setPopSucess(true);
            setShowPopUp((prevShowPopUp) => true);
        } catch (error) {
            setPopSucess(false);
            setShowPopUp((prevShowPopUp) => true);
            console.log(error);
            displayActionMessage(
                `❌ Failed to remove ${cartItem.name} from cart 🛒.`
            );
        } finally {
            setPauseState(false);
            setTimeout(() => {
                setShowPopUp(false);
            }, 3000);
        }
    }
    function displayActionMessage(actionMessage) {
        setActionMessage(actionMessage);
        if (actionMessageTimout) {
            clearTimeout(actionMessageTimout);
        }
        actionMessageTimout = setTimeout(() => {
            setActionMessage("");
            actionMessageTimout = null;
        }, 3000);
    }
    async function addCarToCart(item) {
        setPauseState(true);
        setShowPopUp(false);
        setPopUpType("add");
        setPopUpItem(item);
        try {
            const cartItems = await fetchCartItems();
            const alreadyExists = cartItems.some(
                (cartItems) => cartItems.id === item.id
            );
            if (alreadyExists) {
                displayActionMessage(`⚠️ ${item.name} is already in cart 🛒 !`);
                return;
            }
            const response = await addToCart(item);
            setPopSucess(true);
            setShowPopUp((prevShowPopUp) => true);
            setCartItems((prev) => [...prev, item]);
            displayActionMessage(`✅ ${item.name} added to cart!`);
        } catch (error) {
            setPopSucess(false);
            setShowPopUp((prevShowPopUp) => true);
            displayActionMessage(`❌ Failed to add ${item.name} to cart 🛒.`);
        } finally {
            setPauseState(false);
            setTimeout(() => {
                setShowPopUp(false);
            }, 3000);
        }
    }
    function renderCarDetailElement({ carByID, relatedCars }) {
        const getAverageRating = (reviews) => {
            if (!reviews || reviews.length === 0) return 0;
            const total = reviews.reduce((sum, r) => sum + r.rating, 0);
            return parseFloat((total / reviews.length).toFixed(1));
        };
        const handleScrollToBottom = () => {
            setTimeout(() => {
                document
                    .getElementById("featureScroller")
                    .scrollIntoView({ behavior: "smooth" });
            }, 500); // adjust timing if needed
        };
        const handleScrollToTop = () => {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }, 10); // adjust timing if needed
        };
        const selectedLinkStyles = {
            color: "#161616",
            fontWeight: 700,
            textDecoration: "underline",
        };
        const relatedCarsElement = relatedCars.map((car) => {
            return (
                <Link
                    to={`/cars/${car.id}`}
                    key={car.id}
                    state={{
                        carTrail: [
                            ...((location.state?.carTrail || []).at(-1) ===
                            carByID.id
                                ? location.state?.carTrail || []
                                : [
                                      ...(location.state?.carTrail || []),
                                      carByID.id,
                                  ]),
                        ],
                        carNameTrail: [
                            ...((location.state?.carNameTrail || []).at(-1) ===
                            carByID.name
                                ? location.state?.carNameTrail || []
                                : [
                                      ...(location.state?.carNameTrail || []),
                                      carByID.name,
                                  ]),
                        ],
                    }}
                    onClick={() => handleScrollToTop()}
                    className="carContainerLink relatedCarContainerLink"
                >
                    <div className="carContainer relatedCarContainer">
                        <CarCard car={car} />
                    </div>
                </Link>
            );
        });
        return (
            <>
                <div className="carByIDContainer">
                    <div className="carDetailImg">
                        <LazyImg
                            src={carByID.img}
                            alt={carByID.name}
                            containerWidth={"600px"}
                            containerHeight={"375px"}
                        />
                    </div>
                    <div className="carDetailInfo">
                        <h3>{carByID.name}</h3>
                        <h4 id="featureScroller">
                            Price: {carByID.price.toLocaleString()}$
                        </h4>
                        {!carByID.isSold ? (
                            <div className="carDetailBtns">
                                <Link
                                    className="buyBtn classicBtn"
                                    to={`/checkout/${carByID.id}`}
                                    state={{
                                        ...location.state,
                                        from: `/cars/${carByID.id}`,
                                        carId: carByID.id,
                                        carName: carByID.name,
                                        prevFromQuery: `${
                                            search ? search : ""
                                        }`,
                                        prevFromPage: `${
                                            backLinkPage ? backLinkPage : ".."
                                        }`,
                                    }}
                                >
                                    Buy Now
                                </Link>
                                {isInCart(carByID.id) ? (
                                    <button
                                        className="classicBtn"
                                        onClick={() =>
                                            removeItemFromCart(carByID)
                                        }
                                        disabled={pauseState}
                                    >
                                        {pauseState
                                            ? "Removing from cart"
                                            : "Remove from Cart"}
                                    </button>
                                ) : (
                                    <button
                                        className="addToCartBtn classicBtn"
                                        onClick={() => addCarToCart(carByID)}
                                        disabled={pauseState}
                                    >
                                        {pauseState
                                            ? `adding to cart`
                                            : `add to cart`}
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="outOfStockContainer">
                                <h4 id="outOfStockText">
                                    <span>🚫</span> Out of Stock !
                                </h4>
                            </div>
                        )}

                        <div className="carActionMessage">
                            <h4>{actionMessage}</h4>
                        </div>
                    </div>
                    <div className="carDetailDesc">
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
                            <Outlet context={carByID} />
                        </div>
                    </div>
                </div>
                <div className="relatedCarsSection">
                    <h3 className="relatedHeading">Related Cars : </h3>
                    <div className="carWrapperContainer relatedCarsWrapperContainer">
                        <div className="relatedCarsWrapper carWrapper">
                            {relatedCarsElement}
                        </div>
                    </div>
                </div>
                <div className="carReviewSection">
                    <h3 className="sectionHeading">Customer Reviews :</h3>
                    <div className="averageRatingDisplay">
                        <span className="averageRatingStar">⭐</span> Average
                        Rating:{" "}
                        <strong>{getAverageRating(carByID.reviews)} / 5</strong>{" "}
                        ({carByID.reviews.length} review
                        {carByID.reviews.length !== 1 ? "s" : ""})
                    </div>
                    <div className="reviewsWrapper">
                        {carByID.reviews.length === 0 ? (
                            <p className="noReviewText">No reviews yet.</p>
                        ) : (
                            carByID.reviews.map((review, index) => (
                                <div key={index} className="reviewCard">
                                    <div className="reviewTopSection">
                                        <img
                                            src={review.userPic}
                                            alt={review.username}
                                            className="reviewUserPic"
                                        />
                                        <div className="reviewUserInfo">
                                            <h4 className="reviewUsername">
                                                {review.username}
                                            </h4>
                                            <div
                                                className="carRating"
                                                id="reviewRating"
                                            >
                                                <span id="carRatingStar">
                                                    {/* <i className="fa fa-star"></i> */}
                                                    ⭐
                                                </span>{" "}
                                                <h4>{review.rating}</h4>
                                            </div>
                                            <p className="reviewComment">
                                                {review.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="carDetailContainersWrapper pageContainer">
                {previousCarId ? (
                    <Link
                        className="backLink"
                        to={`/cars/${previousCarId}`}
                        state={{
                            carTrail: carTrail.slice(0, -1),
                            carNameTrail: carNameTrail.slice(0, -1),
                        }} // Go one step back
                    >
                        <i className="fa fa-arrow-left"></i> Back to the{" "}
                        {previousCarIdName}
                    </Link>
                ) : (
                    <Link
                        className="backLink"
                        to={`${backLinkPage ? backLinkPage : ".."}${
                            search ? search : ""
                        }`}
                        relative="path"
                    >
                        <i className="fa fa-arrow-left"></i>
                        {backLinkPage != ".."
                            ? `Back To
                            ${
                                backLinkPage === "/orders"
                                    ? `All ${backLinkPage.replace("/", "")}`
                                    : `${backLinkPage.replace("/", "")} Items`
                            }`
                            : `Back To
                            ${type} Cars`}
                    </Link>
                )}
                <Suspense fallback={<Loading />} key={id}>
                    <Await resolve={carDetailDataPromise.data}>
                        {renderCarDetailElement}
                    </Await>
                </Suspense>
                {popUpItem && (
                    <PopUpCard
                        display={showPopUp}
                        sucess={popSuccess}
                        actionType={popUpType}
                        itemName={popUpItem.name}
                        itemPrice={popUpItem.price}
                    ></PopUpCard>
                )}
            </div>
        </>
    );
}
