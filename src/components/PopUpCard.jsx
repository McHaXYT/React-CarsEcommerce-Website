import React from "react";
import { Link } from "react-router-dom";

export default function PopUpCard({
    display,
    itemName,
    itemPrice,
    sucess,
    actionType,
    inCart,
    popUpKind,
}) {
    return (
        <div
            className={`popUpContainer ${display ? "popUpShow" : "popUpHide"}`}
            id={sucess ? "greenBorderPopUp" : "redBorderPopUp"}
        >
            <div className="popLeft">
                {sucess ? (
                    <div className="svgContainerPop">
                        <svg
                            viewBox="0 0 576 512"
                            width="25"
                            height="25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                                fill="#009688"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    <div className="svgContainerPop">
                        <i className="fas fa-times faRed"></i>
                    </div>
                )}
            </div>
            <div className="popRight">
                <h1 className="popTitle">
                    {sucess
                        ? popUpKind === "order"
                            ? `Your Order Of ${itemName} Has Been Cancelled !`
                            : actionType === "add"
                            ? `Added to cart!`
                            : `Removed from cart!`
                        : popUpKind === "order"
                        ? "Failed To Cancel Your Order !"
                        : actionType === "add"
                        ? `Failed to add ${itemName} to cart.`
                        : `Failed to remove ${itemName} from cart.`}
                </h1>
                <h2 className="popDesc" id={sucess ? "" : "faRed"}>
                    {sucess
                        ? popUpKind === "order"
                            ? `Your order of ${itemName} has now been cancelled refresh the page to make sure it's cancelled.`
                            : actionType === "add"
                            ? `${itemName} is now added to your cart go visit that item in your
                    cart.`
                            : `${itemName} is now removed from your cart go visit your
                    cart to make sure.`
                        : popUpKind === "order"
                        ? "couldn't  cancel your order, try again or refresh the page."
                        : actionType === "add"
                        ? `Couldn't add ${itemName} to the cart 🛒.`
                        : `Couldn't remove ${itemName} from the cart 🛒.`}
                </h2>
                <h3
                    className={`popPrice ${
                        popUpKind === "order" ? "lineThroughPrice" : ""
                    }`}
                >
                    ${itemPrice.toLocaleString()}
                </h3>
                {inCart ? null : (
                    <Link to="/cart" className="classicBtn" id="popLink">
                        View Cart
                    </Link>
                )}
            </div>
        </div>
    );
}
