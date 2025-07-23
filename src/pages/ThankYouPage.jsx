import React, { Suspense } from "react";
import { purchasedItem } from "../api/api";
import Loading from "../components/Loading";
import { useLoaderData, Await, useParams, NavLink } from "react-router-dom";

export async function loader({ params }) {
    return {
        orderedItem: purchasedItem(params.id),
    };
}

export default function ThankYouPage() {
    const { id } = useParams();
    const orderPromise = useLoaderData();
    function renderThankYouCard(order) {
        const orderDate = new Date(order.orders.orderDate);
        const deliveryDate = new Date(order.orders.estimatedDeliveryDate);
        const today = new Date();
        const diffInMs = deliveryDate - today;
        const daysRemaining = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
        return (
            <div className="thankyouCard">
                <div className="thankyouCardContainer">
                    <div className="thankyouTitle">
                        <h1>Thank you </h1>
                        <h2>
                            for your purchase of{" "}
                            <strong>{order.orders.orderedItem.name}</strong>
                        </h2>
                    </div>
                    <div className="thankyouDetails">
                        <div className="thankyouDetailsPara">
                            <p>
                                Thank you,{" "}
                                <strong>
                                    {order.orders.orderDetails.fullName}
                                </strong>
                                , for choosing us! We’ve successfully received
                                your order placed on{" "}
                                <strong>"{order.orders.orderDate}"</strong>.
                            </p>
                            <p>
                                Your {order.orders.orderedItem.name} is being
                                prepared for delivery and will soon be on its
                                way to:{" "}
                                <strong>
                                    {order.orders.orderDetails.address},{" "}
                                    {order.orders.orderDetails.city},{" "}
                                    {order.orders.orderDetails.country}
                                </strong>
                                .
                            </p>
                            <p>
                                In the meantime, you can continue exploring more
                                amazing cars, or visit your order history to
                                view past purchases.
                            </p>
                            <p>
                                We truly appreciate your trust in us, and we
                                hope your new{" "}
                                <strong>{order.orders.orderedItem.name}</strong>{" "}
                                brings you joy and satisfaction. 🚗💨
                            </p>
                        </div>
                        <h2>Order Summary</h2>
                        <div className="orderItem">
                            <h3>
                                Car:
                                <strong>{order.orders.orderedItem.name}</strong>
                            </h3>
                            <h3>
                                Total Price:
                                <strong>
                                    $
                                    {order.orders.orderTotalPrice.toLocaleString()}
                                </strong>
                            </h3>
                        </div>
                        <h2>Shipping Details</h2>
                        <div className="shippingDetails">
                            <h3>
                                Full Name:
                                <strong>
                                    {order.orders.orderDetails.fullName}
                                </strong>
                            </h3>
                            <h3>
                                Phone:
                                <strong>
                                    {order.orders.orderDetails.phone}
                                </strong>
                            </h3>
                            <h3>
                                Address:
                                <strong>
                                    {order.orders.orderDetails.address},{" "}
                                    {order.orders.orderDetails.city},{" "}
                                    {order.orders.orderDetails.country}
                                </strong>
                            </h3>
                            <h3>
                                Shipping Method:
                                <strong>
                                    {order.orders.orderDetails.shipping}
                                </strong>
                            </h3>
                            <h3>
                                Estimated Delievery Date:
                                <strong>
                                    {order.orders.estimatedDeliveryDate}
                                </strong>
                            </h3>
                            <h3>
                                {daysRemaining > 0 ? (
                                    <>
                                        <strong>
                                            " {daysRemaining} day(s) "
                                        </strong>{" "}
                                        remaining until your item arrives.
                                    </>
                                ) : (
                                    `Your item was scheduled for delivery on ${deliveryDate.toDateString()}.`
                                )}
                            </h3>
                        </div>
                    </div>
                    <NavLink
                        className="classicBtn "
                        id="historyBtn"
                        to="/orders"
                    >
                        View Order History
                    </NavLink>
                </div>
            </div>
        );
    }
    return (
        <div className="pageContainer">
            <Suspense fallback={<Loading />} key={id}>
                <Await resolve={orderPromise.orderedItem}>
                    {(order) => renderThankYouCard(order)}
                </Await>
            </Suspense>
        </div>
    );
}
