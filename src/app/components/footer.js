import Image from "next/image";
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
        <Link href="#" className="btnWhatsapp"><Image src="/images/social.png" width={50} height={50} className="img-fluid" alt=""/></Link>
        <Link href="#" className="btnQuote" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <Image src="/images/btn-quote.png" height={230} width={35} className="img-fluid" alt=""/>
        </Link>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <form>
                                <div className="row g-2">
                                    <div className="col-12 text-end">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="col-12 text-center">
                                        <h2 className="text-red">Request A Quote</h2>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <input type="text" name="full name" className="form-control rounded-0" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="email" name="email" className="form-control rounded-0" placeholder="Email"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                                        <input type="tel" name="contact" className="form-control rounded-0" placeholder="Contact No."/>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-2">
                                        <input type="text" name="subject" className="form-control rounded-0" placeholder="Subject"/>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <textarea rows="4" className="form-control rounded-0" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark rounded-0 mt-3">Submit Message</button>
                            </form>
      </div>
    </div>
  </div>
</div>

        </>
    );
}