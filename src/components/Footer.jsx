import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="siteFooter">
            <div className="footerContainer">
                <div className="footerBrand">
                    <h3>#Car Ecommerce</h3>
                    <p>Drive your dream car with trust and transparency.</p>
                </div>
                <div className="footerRight">
                    <div className="footerNav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/cars">Cars</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/#contact">Contact</Link>
                    </div>
                    <p className="footerCopy">
                        Ⓒ {new Date().getFullYear()} #Car Ecommerce. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
