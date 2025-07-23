export default async function fetchCars(
    page,
    perPage,
    searchBy,
    maxPrice,
    maxSeats,
    maxRange,
    sortByPrice,
    sortBySeatingCapacity,
    sortByRange,
    sortByRating
) {
    const pageNumber = page || 1;
    const perPageNumber = perPage || 9;
    const params = new URLSearchParams({
        page: pageNumber,
        perPage: perPageNumber,
    });
    if (searchBy) {
        params.append("searchBy", searchBy);
    }
    if (maxPrice) {
        params.append("maxPrice", maxPrice);
    }
    if (maxSeats) {
        params.append("maxSeats", maxSeats);
    }
    if (maxRange) {
        params.append("maxRange", maxRange);
    }
    if (sortByPrice) {
        params.append("sortByPrice", sortByPrice);
    }
    if (sortBySeatingCapacity) {
        params.append("sortBySeatingCapacity", sortBySeatingCapacity);
    }
    if (sortByRange) {
        params.append("sortByRange", sortByRange);
    }
    if (sortByRating) {
        params.append("sortByRating", sortByRating);
    }
    const url = `/api/cars?${params.toString()}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw {
            message: "Error Fetching Cars",
            statusText: "Not Found",
            status: 404,
        };
    }
    const data = await response.json();
    return data;
}

export async function fetchCarDetails(id) {
    const response = await fetch(`/api/cars/${id}`);
    if (!response.ok) {
        throw {
            message: `Couldn't Find The Cars With ID:${id}`,
            statusText: "Not Found",
            status: 404,
        };
    }
    const data = await response.json();
    return data;
}

export async function fetchCartItems() {
    const response = await fetch(`/api/cart`);
    if (!response.ok) {
        throw {
            message: "Error Fetching Cart Items",
            statusText: "Not Found",
            status: 404,
        };
    }
    const data = await response.json();
    return data.cartItems;
}

export async function addToCart(item) {
    const response = await fetch(`/api/cart`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    if (!response.ok) {
        throw {
            message: "Error Adding This To Cart",
            statusText: "Not Found",
            status: 404,
        };
    }
    const data = await response.json();
    // local storage
    // const currentCartItems = JSON.parse(localStorage.getItem("cartIems") || []);
    // currentCartItems.push(data.cartItem);
    // localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
    return data.cartItems;
}

export async function addToPurchasedItem(item) {
    const response = await fetch(`/api/order`, {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(item),
    });
    if (!response.ok) {
        throw {
            message: "Error Purchasing this Item",
            statusText: "Not Found",
            status: 404,
        };
    }
    const data = await response.json();
    return data;
}

export async function removePurchasedItem(order) {
    const response = await fetch(`/api/order/${order.id}`, {
        method: "DELETE",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        throw {
            message: "Error Canceling The Order !",
            statusText: "Not Found",
            status: 404,
        };
    }
    return;
}

export async function purchasedItem(id) {
    const response = await fetch(`/api/order/${id}`);
    if (!response.ok) {
        throw {
            message: "Error Fetching The Ordered Items",
            statusText: "Not Found",
            status: 404,
        };
    }
    const data = await response.json();
    return data;
}

export async function fetchAllOrders() {
    const response = await fetch(`/api/order`);
    if (!response.ok) {
        throw {
            message: "Error Fetching Orders",
            statusText: "Not Found",
            status: 404,
        };
    }
    const data = await response.json();
    return data;
}

export async function removeFromCart(cartItemId) {
    const response = await fetch(`/api/cart/${cartItemId}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw {
            message: "Error Removing This To Cart",
            statusText: "Not Found",
            status: 404,
        };
    }
    return;
}

export async function fetchCheckoutCar(checkoutCarId) {
    const response = await fetch(`/api/checkout/${checkoutCarId}`);
    if (!response.ok) {
        if (response.status === 409) {
            throw {
                status: 409,
                statusText: "Out Of Stock",
                message: "This Car Is Not Avaliable For Purchase",
            };
        } else {
            throw {
                status: 404,
                statusText: "Not Found",
                message: "Error Purchasing This Car",
            };
        }
    } else {
        const data = await response.json();
        return data;
    }
}
