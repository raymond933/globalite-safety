import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
    <div className="top-bar">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="topbar-links">
                        <li>
                            <Link href="#">Blog</Link>
                        </li>
                        <li>|</li>
                        <li>
                            <i className="fa fa-envelope"></i><Link href="mailto:info@lotoexpert.in"> info@lotoexpert.in</Link>
                        </li>
                        <li>|</li>
                        <li>
                            <i className="fa fa-phone"></i><Link href="tel:08860481786"> +91-8860481786</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src="/images/logo.png" width={180} height={51} className="img-fluid" alt=""/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/about-company">
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/why-choose-globalite-safety">
                      Why Choose Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/quality-policy">
                      Quality Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/our-client">
                      Our Client
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/selling-worldwide">
                      Selling Worldwide
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/our-services">
                      On Site Loto Survey
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/loto-training">
                      Loto Training
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/lockout-tagout-policy-and-procedures">
                      Lockout Tagout Policy And Procedures
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/machine-specific-procedures">
                      Machine Specific Procedures
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/installation-and-implementation">
                      Installation and Implementation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  What is Loto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Download Catalogue
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="product-menu-bar">
        <div className="drop-down">
          <button>Lockout Tagout <i className="fa fa-angle-down"></i></button>
          <div className="lockout-tagout">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <h4>Lockout Tagout</h4>
                  <p>Lockout Tagout,  also known as LOTO or LOTOTO, is a safety procedure used in industries and workplaces to control hazardous energy sources during servicing, maintenance, and repair activities.</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <ul className="dropdown-links">
                    <li><Link href="/category/safety-lockout-hasp">Lockout Hasp</Link></li>
                    <li><Link href="/category/safety-lockout-padlock">Lockout Safety Padlock</Link></li>
                    <li><Link href="/category/lockout-padlock-accessories">Lockout Padlock Accessories</Link></li>
                    <li><Link href="/category/cable-lockout">Cable Lockout</Link></li>
                    <li><Link href="/category/valve-lockout">Valve Lockout</Link></li>
                    <li><Link href="/category/circuit-breaker-lockout">Circuit Breaker Lockout</Link></li>
                    <li><Link href="/category/electrical-panel-lockout">Electrical Panel Lockout</Link></li>
                    <li><Link href="/category/blocking-bar-lockout">Blocking Bar Lockout</Link></li>
                  </ul>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <ul className="dropdown-links">
                    <li><Link href="/category/cylinder-lockout">Cylinder Lockout</Link></li>
                    <li><Link href="/category/plug-lockout">Plug Lockout</Link></li>
                    <li><Link href="/category/pneumatic-lockout">Pneumatic Lockout</Link></li>
                    <li><Link href="/category/pin-sleeve-plug-lockout">Pin & Sleeve Socket Lockout</Link></li>
                    <li><Link href="/category/fuse-lockout">Fuse Lockout</Link></li>
                    <li><Link href="/category/lockout-bags">lockout Bags</Link></li>
                    <li><Link href="/category/lockout-kit">Lockout Tagout Kit</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-down">
          <button>Lockout Station, Cabinets & Group Lock Boxes <i className="fa fa-angle-down"></i></button>
          <div className="lockout-station">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <h4>Lockout Stations, Cabinets & Group Lock Boxes</h4>
                  <p>Ensure compliance and safety with our premium range of Lockout Stations, Lockout Cabinets, and Group Lock Boxes. Designed for industrial environments, our solutions help manage lockout devices efficiently, improve workplace safety, and meet OSHA standards.</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <ul className="dropdown-links">
                    <li><Link href="/category/lockout-station-front-view">Lockout Station – Front View</Link></li>
                    <li><Link href="/category/lockout-station-side-view">Lockout Station – Side View</Link></li>
                    <li><Link href="/category/shadow-station">Shadow Station</Link></li>
                    <li><Link href="/category/lockout-station">Lockout Stations</Link></li>
                    <li><Link href="/category/key-cabinets">Key Cabinets</Link></li>
                    <li><Link href="/category/lockout-padlock-cabinets">Padlock Cabinets</Link></li>
                  </ul>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <ul className="dropdown-links">
                    <li><Link href="/category/aluminium-key-cabinet">Aluminium Key Cabinet</Link></li>
                    <li><Link href="/category/group-lock-box">Group Lock Box</Link></li>
                    <li><Link href="/category/wall-mount-group-lock-box">Wall Mount Group Lock Box</Link></li>
                    <li><Link href="/category/safety-lockout-cabinet-stations">Safety Lockout Cabinet & Stations</Link></li>
                    <li><Link href="/category/sds-safety-data-sheet-stations">SDS - Safety Data Sheet Stations</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-down">
          <button>Lockout Tags, Stations & Safety Signs <i className="fa fa-angle-down"></i></button>
          <div className="lockout-tags">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <h4>Lockout Tags, Stations & Safety Signs</h4>
                  <p>At Globalite Safety, we understand that workplace safety isn’t optional — it’s essential. Our range of Lockout/Tagout (LOTO) solutions and safety signage is designed to protect workers, maintain regulatory compliance, and create a hazard-free environment.</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <ul className="dropdown-links">
                    <li><Link href="/category/lockout-tags">Lockout Tags</Link></li>
                    <li><Link href="/category/customized-tags">Customized Tags</Link></li>
                    <li><Link href="/category/other-loto-tags">Other LOTO Tags</Link></li>
                    <li><Link href="/category/padlock-tags">Padlock Tags</Link></li>
                    <li><Link href="/category/scaffolding-tags-tag-holders">Scaffolding Tags & Tag Holders</Link></li>
                    <li><Link href="/category/fire-extinguisher-tag">Fire Extinguisher Tag</Link></li>
                    <li><Link href="/category/tag-stations">Tag Stations</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-down">
          <button>Lockout Accessories & Other Products <i className="fa fa-angle-down"></i></button>
          <div className="lockout-accessories">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <h4>Lockout Accessories & Other Products</h4>
                  <p>At Globalite Safety, we offer a comprehensive range of lockout accessories to support your lockout/tagout (LOTO) procedures. These accessories are designed to enhance worker safety, improve compliance with OSHA standards, and streamline your isolation processes across electrical, mechanical, hydraulic, and pneumatic systems.</p>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <ul className="dropdown-links">
                    <li><Link href="#">Lockout Accessories</Link></li>
                    <li><Link href="#">Lockout Registers</Link></li>
                    <li><Link href="#">Training Booklet</Link></li>
                    <li><Link href="/category/sds-safety-data-sheet-stations">SDS- Safety Data Sheet Stations</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="product-menu">
                        <li className="lockout-tagout-link">
                            <Link href="#">Lockout Tagout</Link>
                        </li>
                        <li>
                            <Link href="#">Lockout Station, Cabinets & Group Lock Boxes</Link>
                        </li>
                        <li>
                            <Link href="#">Lockout Tags, Stations & Safety Signs</Link>
                        </li>
                        <li>
                            <Link href="#">Lockout Accessories & Other Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
      </div>
    </>
  );
}
