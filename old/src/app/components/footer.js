import Link from "next/link";

export default function Footer(){
    return(
        <>
        <footer className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="#">About Globalite Safety</Link></li>
                            <li><Link href="#">Why Globality Safety</Link></li>
                            <li><Link href="#">LOTO Training</Link></li>
                            <li><Link href="#">Site Survey & Training</Link></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <h4>Product Range</h4>
                        <ul>
                            <li><Link href="#">Lockout Padlocks</Link></li>
                            <li><Link href="#">Lockout Hasp</Link></li>
                            <li><Link href="#">Circuit Breaker Lockout</Link></li>
                            <li><Link href="#">Valve Lockout</Link></li>
                            <li><Link href="#">Safety Lockout Padlock</Link></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <h4>Discover Globalite</h4>
                        <ul>
                            <li><Link href="#">Quality Policy</Link></li>
                            <li><Link href="#">Selling Worldwide</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">Clients</Link></li>
                            <li><Link href="#">Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <h4>Reach Us</h4>
                        <ul>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Download E-Catalogue</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright">
            Copyright © 2025 All rights reserved by Globalite Safety Solutions Private Limited | Developed by: Keyword India Network Pvt. Ltd.
        </div>
        </>
    );
}