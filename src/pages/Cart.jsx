import React, { Suspense, useEffect, useState } from "react";
import { Await, useLoaderData, Link, useSearchParams } from "react-router-dom";
import { fetchCartItems, removeFromCart } from "../api/api";
import { useCart } from "../components/CartContext";
import Loading from "../components/Loading";
import CarCard from "../components/CarCard";
import PopUpCard from "../components/PopUpCard";

export async function loader() {
    return {
        cartItems: fetchCartItems(),
    };
}

export default function Cart() {
    // Pop Up States
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpType, setPopUpType] = useState();
    const [popSuccess, setPopSucess] = useState(true);
    const [popUpItem, setPopUpItem] = useState(null);
    //
    const cartItemsLoaderData = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const [actionMessage, setActionMessage] = useState("");
    //const [cartItems, setCartItems] = useState([]);
    const { cartItems, setCartItems } = useCart();
    const [removingItemId, setRemovingItemId] = useState(null);
    let actionMessageTimout;
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
    useEffect(() => {
        cartItemsLoaderData.cartItems.then((data) => {
            setCartItems(data);
        });
    }, [cartItemsLoaderData, setCartItems]);
    async function removeItemFromCart(cartItem) {
        setRemovingItemId(cartItem.id);
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
            displayActionMessage(
                `❌ Failed to remove ${cartItem.name} from cart 🛒.`
            );
        } finally {
            setRemovingItemId(null);
            setTimeout(() => {
                setShowPopUp(false);
            }, 3000);
        }
    }
    function renderCartItems(cartItems) {
        const cartItemElement = cartItems.map((cartItem) => {
            return (
                <div className="cartItemContainer" key={cartItem.id}>
                    <CarCard car={cartItem} />
                    <div className="cartItemBtns">
                        <div className="cartItemSecondaryBtns">
                            <Link
                                key={cartItem.id}
                                to={`/cars/${cartItem.id}`}
                                className="classicBtn"
                                state={{
                                    from: "/cart",
                                    searchParams: `?${searchParams.toString()}`,
                                }}
                            >
                                View Item
                            </Link>
                            <button
                                className="classicBtn"
                                onClick={() => removeItemFromCart(cartItem)}
                                disabled={removingItemId === cartItem.id}
                            >
                                {removingItemId === cartItem.id
                                    ? "Removing from cart"
                                    : "Remove from Cart"}
                            </button>
                        </div>
                        <Link
                            className="buyBtn classicBtn"
                            to={`/checkout/${cartItem.id}`}
                            state={{
                                from: `/cart`,
                                carId: cartItem.id,
                                carName: cartItem.name,
                            }}
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            );
        });
        return (
            <div className="cartPage">
                <h1>{cartItems.length} Cart Items:</h1>
                <div className="cartActionMessage">
                    <h4>{actionMessage}</h4>
                </div>
                <div className="cartItemContainerWrapper">
                    <div className="cartItemsContainer">
                        {cartItems.length > 0 ? (
                            cartItemElement
                        ) : (
                            <h4 className="nothingText">
                                " No Cart Items To Display "
                            </h4>
                        )}
                    </div>
                </div>
                {popUpItem && (
                    <PopUpCard
                        display={showPopUp}
                        inCart={true}
                        sucess={popSuccess}
                        actionType={popUpType}
                        itemName={popUpItem.name}
                        itemPrice={popUpItem.price}
                    ></PopUpCard>
                )}
            </div>
        );
    }
    return (
        <div className="pageContainer">
            <Suspense fallback={<Loading />}>
                <Await resolve={cartItemsLoaderData.cartItems}>
                    {() => renderCartItems(cartItems)}
                </Await>
            </Suspense>
        </div>
    );
}
