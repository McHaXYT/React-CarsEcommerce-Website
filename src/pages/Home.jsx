import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LazyImg from "../components/LazyImg";
import {
    FaCheckCircle,
    FaBolt,
    FaShieldAlt,
    FaTags,
    FaHandshake,
    FaCarSide,
    FaStar,
    FaUserCircle,
    FaEnvelope,
} from "react-icons/fa";

export default function Home() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const features = [
        {
            icon: <FaCheckCircle className="featureIcon" />,
            title: "Verified Listings",
            desc: "Only cars with verified sellers, history, and documents.",
        },
        {
            icon: <FaBolt className="featureIcon" />,
            title: "Quick Transactions",
            desc: "Book your car and complete checkout in just a few clicks.",
        },
        {
            icon: <FaTags className="featureIcon" />,
            title: "Transparent Pricing",
            desc: "No hidden charges. Prices you see are what you pay.",
        },
        {
            icon: <FaShieldAlt className="featureIcon" />,
            title: "Secure Payments",
            desc: "Bank-level encrypted payments and data protection.",
        },
        {
            icon: <FaHandshake className="featureIcon" />,
            title: "Trusted by Buyers",
            desc: "Thousands of happy customers trust us with their purchases.",
        },
        {
            icon: <FaCarSide className="featureIcon" />,
            title: "Wide Car Selection",
            desc: "Choose from sedans, SUVs, sports cars, and more.",
        },
    ];
    const testimonials = [
        {
            name: "Ali Raza",
            review: "I found the perfect car within minutes. The process was smooth and the team was super helpful!",
            stars: 5,
        },
        {
            name: "Sarah Khan",
            review: "Trusted platform. I loved how transparent the pricing was and how fast the delivery happened.",
            stars: 4,
        },
        {
            name: "John Doe",
            review: "I sold my old car and bought a new one on this site — the experience was flawless.",
            stars: 5,
        },
    ];
    return (
        <div className="homePage">
            <section className="heroSection">
                <div className="heroLeft">
                    <h1>Drive Your Dream Car Today</h1>
                    <p>
                        Discover a seamless way to browse, compare, and buy from
                        a wide collection of trusted cars. Affordable prices,
                        fast delivery, and verified listings — all in one place.
                    </p>
                    <div className="heroButtons">
                        <Link
                            to="/cars"
                            className="classicBtn"
                            id="btn--primary"
                        >
                            Explore Our Cars
                        </Link>
                        <Link
                            to="/about"
                            className="classicBtn"
                            id="btn--secondary"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="heroRight">
                    <LazyImg
                        src="/img/car/toyota/Toyota-Land-Cruiser.webp"
                        alt="Ford Mustang"
                        containerWidth="600px"
                        containerHeight="375px"
                    />
                </div>
            </section>
            <section className="whyChooseUs">
                <div className="whyHeader">
                    <h2>Why Choose Us ?</h2>
                    <p>Here’s what makes our platform stand out.</p>
                </div>
                <div className="featuresGrid">
                    {features.map((feature, idx) => (
                        <div className="featureCard" key={idx}>
                            {feature.icon}
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="testimonialsSection">
                <div className="testimonialsHeader">
                    <h2>What Our Customers Say</h2>
                    <p>Real reviews from real buyers.</p>
                </div>
                <div className="testimonialGrid">
                    {testimonials.map((t, idx) => (
                        <div className="testimonialCard" key={idx}>
                            <FaUserCircle className="userIcon" />
                            <h3>{t.name}</h3>
                            <p>"{t.review}"</p>
                            <div className="stars">
                                {Array(t.stars)
                                    .fill(0)
                                    .map((_, i) => (
                                        <FaStar key={i} className="starIcon" />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="contactUsSection">
                <div className="contactContainer">
                    <h2>Need Help or Have Questions?</h2>
                    <p>
                        We're here to assist you with anything related to buying
                        or selling cars.
                    </p>
                    <a
                        href="mailto:support@yourcarsite.com"
                        className="emailLink"
                    >
                        <FaEnvelope className="emailIcon" />
                        support@yourcarsite.com
                    </a>
                </div>
            </section>
        </div>
    );
}
