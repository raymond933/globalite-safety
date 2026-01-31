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
                            <li><Link href="/about-company">About Globalite Safety</Link></li>
                            <li><Link href="/why-choose-globalite-safety">Why Globality Safety</Link></li>
                            <li><Link href="/loto-training">LOTO Training</Link></li>
                            <li><Link href="/our-services">Site Survey & Training</Link></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <h4>Product Range</h4>
                        <ul>
                            <li><Link href="/safety-lockout-padlock">Lockout Padlocks</Link></li>
                            <li><Link href="/safety-lockout-hasp">Lockout Hasp</Link></li>
                            <li><Link href="/circuit-breaker-lockout">Circuit Breaker Lockout</Link></li>
                            <li><Link href="/valve-lockout">Valve Lockout</Link></li>
                            <li><Link href="/safety-lockout-padlock">Safety Lockout Padlock</Link></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <h4>Discover Globalite</h4>
                        <ul>
                            <li><Link href="/quality-policy">Quality Policy</Link></li>
                            <li><Link href="/selling-worldwide">Selling Worldwide</Link></li>
                            <li><Link href="/our-services">Services</Link></li>
                            <li><Link href="/our-client">Clients</Link></li>
                            <li><Link href="#">Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <h4>Reach Us</h4>
                        <ul>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/career">Careers</Link></li>
                            <li><Link href="#">Download E-Catalogue</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright" style={{fontSize:14}}>
            Copyright © 2026 All rights reserved by Globalite Safety Solutions Private Limited | Developed by: Keyword India Network Pvt. Ltd.
        </div>
        </>
    );
}