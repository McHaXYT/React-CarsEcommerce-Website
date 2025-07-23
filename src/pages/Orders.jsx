import React, { Suspense, useState } from "react";
import {
    Await,
    useLoaderData,
    NavLink,
    useRevalidator,
    useSearchParams,
} from "react-router-dom";
import Loading from "../components/Loading";
import { fetchAllOrders, removePurchasedItem } from "../api/api";
import LazyImage from "../components/LazyImg";
import PopUpCard from "../components/PopUpCard";

export async function loader() {
    return {
        orders: fetchAllOrders(),
    };
}

//// ?
//// * ADD REMOVED FROM CART AND ADDED TO CART UI/UX EXPERIENCE
//// * FIX SO THAT PURCHASING A ITEM REMOVES IT FROM CART
//// * FIX SKELETON LOADING TO TAKE THE SIZE OF THE IMAGE
//// * Make Pop Up UI/UX Responsive
//// * FIX LAYOUT OF ORDERS TO GRID AND MAKE IT RESPONSIVE [ALMOST DONE] ? NOT PRETTY BUT RESPONSIVE
//// * CHECK IF ITS IN CART BEFORE REMOVING WHEN BUYING
//// * RENDER OUT OF STOCK INSTEAD OF BUTTONS IF IT HAS BEEN PURCHASED SAME FOR THE CARD CARD
//// * FIX ON CANCEL ORDER MAKE IT RENDER SO WE CAN SEE THE UPDATED LIST OF ORDERS
//// * ADD PAUSE STATE AND DISABLE ON CANCEL ORDER
//// * SHOW POP UP ON CANCEL ORDER
//// * FIX POP UP CARD TEXT ON CANCEL ORDER
//// * SET IS SOLDFALG TO FALSE WHEN ORDERED IS CANCELED
//// * FIX SETTING THE ISSOLD FLAG BACK TO FALSE WHEN THE ORDER IS CANCELLED
//// * FIX SO THAT ON CHECKOUT PAGE RENDER IT SCROLLS TO THE CHECKOUT FORM
//// * FIX INTIAL STATE IS NULL TO VIEW ITEMS
//// * CANCELING ORDER
//// * HOME PAGE, ABOUT US, MOBILE NAV, FOOTER
//// * ADD UNIVERSAL ERROR BOUNDARY
//// * ADD CUSTOMER REVIEWS IN CAR DETAILS AND AVG REVIEW STARS IN CARS
//// * ADD SORT BY RATING FILTER
//// * FIX PRELOADER TO BE IN THE MIDDLE VERTICALLY OF THE PAGE [FOR LATER]
//// * MAKE THAT CERTAIN CHECKOUT ROUTE PROTECTED IF THE CAR IS SOLD OUT
//// ! FIX THE TIMER ISSUE FOR POP UP AND MAKE IT GLOBAL [ FIRST LEARN REACT CONTEXT AND OTHER STUFF ]
//// ?

export default function Orders() {
    const promisedOrders = useLoaderData();
    const [cancellingOrderId, setCancellingOrderId] = useState(null);
    const revalidator = useRevalidator();
    const [searchParams, setSearchParams] = useSearchParams();
    // Pop Up States
    const [showPopUp, setShowPopUp] = useState(false);
    const [popSuccess, setPopSucess] = useState(true);
    const [popUpItem, setPopUpItem] = useState(null);
    //
    function renderOrders({ orders }) {
        async function cancelOrder(orders) {
            setCancellingOrderId(orders.id);
            setShowPopUp(false);
            setPopUpItem(orders.orderedItem);
            try {
                const removeResponse = await removePurchasedItem(orders);
                revalidator.revalidate();
                setPopSucess(true);
                setShowPopUp((prevShowPopUp) => true);
            } catch (err) {
                console.log(err);
                setPopSucess(false);
                setShowPopUp((prevShowPopUp) => true);
            } finally {
                setCancellingOrderId(null);
                setTimeout(() => {
                    setShowPopUp(false);
                }, 3500);
            }
        }
        const allOrders = orders.map((order) => {
            const orderDate = new Date(order.orderDate);
            const deliveryDate = new Date(order.estimatedDeliveryDate);
            const today = new Date();
            const diffInMs = deliveryDate - today;
            const daysRemaining = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
            return (
                <div className="orderItemContainer" key={order.id}>
                    <div className="orderLeft">
                        <h1 className="orderTitleName">
                            {order.orderedItem.name}
                        </h1>
                        <h1 className="orderTitleSubName">
                            {order.orderedItem.specifications.brand}
                        </h1>
                        <h4 className="orderPrice">
                            Price: ${order.orderTotalPrice.toLocaleString()}
                        </h4>
                        <div className="orderDetailsContainer">
                            <h2 className="buyerName">
                                Ordered By: {order.orderDetails.fullName}
                            </h2>
                            <h2>Ordered On: {order.orderDate}</h2>
                            <h2>
                                Shipping: {order.orderDetails.shipping} Delivery
                            </h2>
                            <h2>
                                Shipping Adress: {order.orderDetails.address},{" "}
                                {order.orderDetails.city},{" "}
                                {order.orderDetails.country}
                            </h2>
                            <h2>
                                Estimated Delivery Date:{" "}
                                {order.estimatedDeliveryDate}
                            </h2>
                            <h2>
                                <span>"{daysRemaining} day(s)"</span> remaning
                                till order arrives
                            </h2>
                        </div>
                    </div>
                    <div className="orderRight">
                        <LazyImage
                            src={order.orderedItem.img}
                            className="orderImg"
                            containerWidth={"375px"}
                            containerHeight={"auto"}
                        />
                        <div className="orderRightBtnContainer">
                            <NavLink
                                className="classicBtn"
                                id="orderViewBtn"
                                to={`/cars/${order.orderedItem.id}`}
                                state={{
                                    from: "/orders",
                                    searchParams: `?${searchParams.toString()}`,
                                }}
                            >
                                View Item
                            </NavLink>
                            <button
                                className="classicBtn"
                                id="orderCancelBtn"
                                onClick={() => cancelOrder(order)}
                                disabled={cancellingOrderId === order.id}
                            >
                                {cancellingOrderId === order.id
                                    ? "Canceling...."
                                    : "Cancel Order"}
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <>
                <div className="orderPage">
                    <h1>Your Orders ({orders.length}) :</h1>
                    <div className="orderSection">
                        {orders.length > 0 ? (
                            allOrders
                        ) : (
                            <h4 className="nothingText">
                                " No Orders To Display "
                            </h4>
                        )}
                    </div>
                </div>
                {popUpItem && (
                    <PopUpCard
                        display={showPopUp}
                        inCart={true}
                        sucess={popSuccess}
                        popUpKind={"order"}
                        itemName={popUpItem.name}
                        itemPrice={popUpItem.price}
                    ></PopUpCard>
                )}
            </>
        );
    }
    return (
        <div className="pageContainer">
            <Suspense fallback={<Loading />}>
                <Await resolve={promisedOrders.orders}>
                    {(orders) => renderOrders(orders)}
                </Await>
            </Suspense>
        </div>
    );
}
