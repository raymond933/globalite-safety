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
                    <Link className="dropdown-item" href="#">
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Why Choose Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Quality Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Our Client
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
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
                    <Link className="dropdown-item" href="#">
                      On Site Loto Survey
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Loto Training
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Lockout Tagout Policy And Procedures
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Machine Specific Procedures
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
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
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="product-menu">
                        <li>
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
        </div>
      </div>
    </>
  );
}
