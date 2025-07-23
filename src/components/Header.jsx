/* import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Header() {
    const { cartItems } = useCart();
    const selectedLinkStyles = {
        color: "#161616",
        fontWeight: 700,
    };
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            Cars Ecommerce
                        </NavLink>
                    </div>
                    <div className="navLinks">
                        <NavLink
                            to="about"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="cars"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            Cars
                        </NavLink>
                        <NavLink
                            to="orders"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            Orders
                        </NavLink>
                        <NavLink
                            to="cart"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            <div className="cartIconContainer">
                                <i className="fa fa-shopping-cart navCart">
                                    {cartItems.length > 0 ? (
                                        <span className="cartItemNumber">
                                            {cartItems.length}
                                        </span>
                                    ) : null}
                                </i>
                            </div>
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
}
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Header() {
    const { cartItems } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const selectedLinkStyles = {
        color: "#161616",
        fontWeight: 700,
    };

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            Cars Ecommerce
                        </NavLink>
                    </div>

                    <div className="navLinks desktopOnly">
                        <NavLink
                            to="/about"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/cars"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            Cars
                        </NavLink>
                        <NavLink
                            to="/orders"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            Orders
                        </NavLink>
                        <NavLink
                            to="/cart"
                            style={({ isActive }) =>
                                isActive ? selectedLinkStyles : null
                            }
                        >
                            <div className="cartIconContainer">
                                <i className="fa fa-shopping-cart navCart">
                                    {cartItems.length > 0 && (
                                        <span className="cartItemNumber">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </i>
                            </div>
                        </NavLink>
                    </div>

                    <div
                        className="mobileOnly hamburgerIcon"
                        onClick={toggleMenu}
                    >
                        <i className="fa fa-bars"></i>
                    </div>
                </nav>
                <div className={`mobileMenuOverlay ${menuOpen ? "open" : ""}`}>
                    <div className="mobileMenuContent">
                        <div className="closeBtn" onClick={closeMenu}>
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="mobileNavLinks">
                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#161616", fontWeight: 700 }
                                        : { color: "#4d4d4d" }
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#161616", fontWeight: 700 }
                                        : { color: "#4d4d4d" }
                                }
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/cars"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#161616", fontWeight: 700 }
                                        : { color: "#4d4d4d" }
                                }
                            >
                                Cars
                            </NavLink>
                            <NavLink
                                to="/orders"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#161616", fontWeight: 700 }
                                        : { color: "#4d4d4d" }
                                }
                            >
                                Orders
                            </NavLink>
                            <NavLink
                                to="/cart"
                                onClick={closeMenu}
                                id="mobileCartLink"
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#161616", fontWeight: 700 }
                                        : { color: "#4d4d4d" }
                                }
                            >
                                Cart{" "}
                                <div className="cartIconContainer">
                                    <i className="fa fa-shopping-cart navCart">
                                        {cartItems.length > 0 && (
                                            <span className="cartItemNumber">
                                                {cartItems.length}
                                            </span>
                                        )}
                                    </i>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
