import React, { useEffect } from "react";
import {
    FaCar,
    FaHandshake,
    FaCheckCircle,
    FaShieldAlt,
    FaSmile,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function About() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div className="aboutPage">
            <section className="aboutHeader">
                <h1>About Us</h1>
                <p>
                    Passionate about transforming the car buying experience —
                    one trusted connection at a time.
                </p>
            </section>
            <section className="aboutSection">
                <h2>Our Mission</h2>
                <p>
                    At <strong>#Car Ecommerce</strong>, our mission is simple
                    yet powerful: to empower buyers with a fast, secure, and
                    transparent way to purchase their dream car. Whether it's
                    your first vehicle or your next upgrade, we aim to eliminate
                    the stress and confusion by offering verified listings, fair
                    pricing, and expert support at every step.
                </p>
                <p>
                    We believe that trust is the foundation of every successful
                    purchase. That’s why we work tirelessly to ensure each
                    listing meets our high standards — so you can drive with
                    confidence, from the moment you browse to the day the keys
                    are in your hand.
                </p>
            </section>
            <section className="aboutSection">
                <h2>Our Story</h2>
                <p>
                    Founded by a small team of car enthusiasts, tech engineers,
                    and business minds,
                    <strong> #Car Ecommerce</strong> was created out of
                    frustration with the traditional car-buying process. Hidden
                    fees, unverified sellers, and endless back-and-forth made it
                    difficult for customers to find cars they could trust.
                </p>
                <p>
                    So we built something better — a platform that’s focused on
                    integrity, clarity, and speed. Today, we serve thousands of
                    happy customers across the region, helping them find the
                    right car without the usual headaches.
                </p>
            </section>
            <section className="aboutTrust">
                <h2>Why Customers Trust Us</h2>
                <div className="trustGrid">
                    <div className="trustCard">
                        <FaCheckCircle className="trustIcon" />
                        <h3>Verified Listings</h3>
                        <p>
                            Every car listed on our platform is thoroughly
                            verified for history, ownership, condition, and
                            documentation — no shady sellers, ever.
                        </p>
                    </div>
                    <div className="trustCard">
                        <FaShieldAlt className="trustIcon" />
                        <h3>Secure Transactions</h3>
                        <p>
                            Your safety matters. We use bank-grade encryption
                            and secure payment channels so you can buy your car
                            with peace of mind.
                        </p>
                    </div>
                    <div className="trustCard">
                        <FaSmile className="trustIcon" />
                        <h3>Customer Satisfaction</h3>
                        <p>
                            With thousands of 5-star experiences, we’re proud to
                            be one of the most trusted names in online car
                            buying.
                        </p>
                    </div>
                    <div className="trustCard">
                        <FaHandshake className="trustIcon" />
                        <h3>Real Support</h3>
                        <p>
                            No bots. No generic answers. Our friendly support
                            team is here to guide you before, during, and after
                            your purchase.
                        </p>
                    </div>
                </div>
            </section>
            <section className="aboutCTA">
                <h2>Ready to Explore?</h2>
                <p>
                    Browse hundreds of verified cars, compare specs, and
                    complete your purchase in just a few clicks. It's never been
                    easier to drive the car you love — all from the comfort of
                    your screen.
                </p>
                <Link to="/cars" className="classicBtn" id="startBrowsing">
                    Start Browsing
                </Link>
            </section>
        </div>
    );
}
