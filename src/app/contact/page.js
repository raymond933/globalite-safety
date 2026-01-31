import Link from "next/link";
import styles from "./page.module.css";

export default function Contact(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Contact Us</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Contact Us
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-red mb-4">
                            Ready to take the next step towards a safer workplace?
                        </h1>
                        <p>Reach out to our sales team to explore the opportunities of partnering with Globalite Safety. We are excited to welcome you to our growing community of satisfied clients and look forward to serving your lockout tagout safety needs.</p>
                        <p>Remember, at Globalite Safety, your safety is our priority. Trust us to provide you with the best lockout tagout safety products and exceptional service that you deserve.</p>
                        <p>Together, let’s create a safer tomorrow.</p>
                    </div>
                </div>
            </div>
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <h2 className="text-red mb-4">Get in touch with Us</h2>
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <p className="mb-1"><strong>24 x 7 Helpline Support</strong></p>
                                    <div><Link href="tel:+918860481786" className="btn btn-default px-0">+91-8860 481 786</Link></div>
                                    {/* <div><Link href="tel:+91-9999579786" className="btn btn-default px-0">+91-9999 579 786</Link></div> */}
                                    <p className="mt-4 mb-1"><strong>Sales Support</strong></p>
                                    <div><Link href="tel:+917711984786" className="btn btn-default px-0">+91-7711 984 786</Link></div>
                                    <div><Link href="mailto:sales@globalitesafety.com" className="btn btn-default px-0">sales@globalitesafety.com</Link></div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <p className="mb-1"><strong>Customer Support</strong></p>
                                    <div><Link href="tel:+911145635011" className="btn btn-default px-0">+91-1145635011</Link></div>
                                    <div><Link href="tel:+91-9354908598" className="btn btn-default px-0">+91-9354 908 598</Link></div>
                                    {/* <div><Link href="tel:+917711984786" className="btn btn-default px-0">+91-7711984786</Link></div> */}
                                    
                                </div>
                            </div>
                            <div className="mt-4">
                                        <Link href="#" className="btn btn-default"><i className="fa-brands fa-facebook-f fa-lg"></i></Link>
                                        <Link href="#" className="btn btn-default"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                        <Link href="#" className="btn btn-default"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                        <Link href="#" className="btn btn-default"><i className="fa-brands fa-youtube fa-lg"></i></Link>
                                    </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <form>
                                <div className="row g-2">
                                    <div className="col-12 mt-2">
                                        <input type="text" name="full name" className="form-control" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="email" name="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="tel" name="contact" className="form-control" placeholder="Contact No."/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="text" name="company" className="form-control" placeholder="Company"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="text" name="city" className="form-control" placeholder="City"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="text" name="country" className="form-control" placeholder="Country"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="text" name="address" className="form-control" placeholder="Address"/>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <textarea rows="4" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger mt-3">Submit Message</button>
                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body">
                                <h5 className="text-red">Registered Office Address</h5>
                                <div>
                                    408/5, B1‑A,<br></br>
                                    Street No. 22,<br></br>
                                    Anand Parbat Indl. Area<br></br>
                                    New Delhi India Pin꞉ 110005 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body">
                                <h5 className="text-red">International Business Devision </h5>
                                <div>
                                    export@globalitesafety.com<br></br>
                                    {/* info@lotoexpert.in<br></br> */}
                                    +91 9999 579 786
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}