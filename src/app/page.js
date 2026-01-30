import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>
        <Image src="/images/globalite-banner-1.webp" width={1920} height={700} className="img-fluid" alt=""/>
      </div>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 align-self-center">
            <div className="row pb-4 ps-4">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                <div className={styles.hBox01}>
                  <h5>What is Lockout Tagout</h5>
                  <p>Lockout Tagout,  also known as LOTO or LOTOTO, is a safety procedure used in industries and workplaces to control hazardous energy sources during servicing, maintenance, and repair activities. </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                <div className={styles.hBox01}>
                  <h5>What is Lockout Tagout</h5>
                  <p>Lockout Tagout,  also known as LOTO or LOTOTO, is a safety procedure used in industries and workplaces to control hazardous energy sources during servicing, maintenance, and repair activities. </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                <div className={styles.hBox01}>
                  <h5>What is Lockout Tagout</h5>
                  <p>Lockout Tagout,  also known as LOTO or LOTOTO, is a safety procedure used in industries and workplaces to control hazardous energy sources during servicing, maintenance, and repair activities. </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                <div className={styles.hBox01}>
                  <h5>What is Lockout Tagout</h5>
                  <p>Lockout Tagout,  also known as LOTO or LOTOTO, is a safety procedure used in industries and workplaces to control hazardous energy sources during servicing, maintenance, and repair activities. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className={styles.hBox02}>
              <h2>One Stop. Total Lockout Tagout Control.</h2>
              <p>Delivering customized solution, cost-effective, and OSHA-aligned LOTO solutions for safer workplaces.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>PRODUCTS CATEGORIES</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <Link href="#" className={styles.product01}>
              Lockout<br></br>Tagout
            </Link>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <Link href="#" className={styles.product02}>
              Lockout<br></br>Stations,<br></br>Cabinets &<br></br>Group Lock<br></br>Boxes
            </Link>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.product03}>
              Lockout<br></br>Tags,<br></br>Stations &<br></br>Safety Signs
            </Link>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.product04}>
              Lockout<br></br>Accessories<br></br>& Other<br></br>Products
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.section03}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 align-self-center">
              <h2>SELLING WORLDWIDE</h2>
              <p>We understand that different regions have different safety regulations and standards, and we strive to comply with all relevant regulations to ensure the safety and wellbeing of our customers. Our products are designed and manufactured with the highest quality materials and meet or exceed industry standards, making them suitable for use in a variety of industries.</p>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 align-self-center">
              <Image src="/images/mappng-1536x627.webp" width={1536} height={627} className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>WHAT WE DO</h2>
            <p>Our Main Aim Is To Provide The Implementation Of Lockout / Tagout As Per Osha Standard 29 Cfr 1910.147</p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.wwd}>
              <Image src="/images/lockout-img.webp" width={800} height={400} className="img-fluid img-thumbnail" alt=""/>
              <h2>LOCKOUT / TAGOUT PRODUCTS</h2>
            </Link>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.wwd}>
              <Image src="/images/survey-img.webp" width={800} height={400} className="img-fluid img-thumbnail" alt=""/>
              <h2>LOCKOUT SURVEY</h2>
            </Link>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.wwd}>
              <Image src="/images/training-img.webp" width={800} height={400} className="img-fluid img-thumbnail" alt=""/>
              <h2>LOTO TRAINING</h2>
            </Link>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.wwd}>
              <Image src="/images/policy-img.webp" width={800} height={400} className="img-fluid img-thumbnail" alt=""/>
              <h2>POLICY AND PROCEDURES</h2>
            </Link>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.wwd}>
              <Image src="/images/procedure-img.webp" width={800} height={400} className="img-fluid img-thumbnail" alt=""/>
              <h2>MACHINE SPECIFIC PROCEDURES</h2>
            </Link>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <Link href="#" className={styles.wwd}>
              <Image src="/images/installation-img.webp" width={800} height={400} className="img-fluid img-thumbnail" alt=""/>
              <h2>INSTALLATION & PROCEDURE</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>WHY GLOBALITE SAFETY</h2>
            <p>Being an Indian-based company, we promise to supply excellent quality products at reasonable prices and satisfying services worldwide.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <i className="fa fa-lock fa-2x"></i>
                <h4 className="mt-3">Wide Range of Products </h4>
                <p>We offer a wide range of Lockout / Tagout products including cable lockout, Valve Lockout, Electrical Lockout, Lockout Padlocks, Cabinets, and many more. </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <i className="fa fa-thumbs-up fa-2x"></i>
                <h4 className="mt-3">Our Quality </h4>
                <p>We maintain high-standard quality & offer durable, reliable, and easy to use energy isolation products </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <i className="fa fa-certificate fa-2x"></i>
                <h4 className="mt-3">ISO Certified Company</h4>
                <p>Globalite Safety is ISO 9001:2015 Certified company. </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <i className="fa fa-hand fa-2x"></i>
                <h4 className="mt-3">One-stop for LOTO Program</h4>
                <p>From Product to service, Globalite Safety provides a complete solution for all your lockout and Tagout needs. Survey, Training, Audit, Policy & Procedures, Installation & Implementation all service provided. </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <i className="fa fa-user fa-2x"></i>
                <h4 className="mt-3">Client Satisfaction</h4>
                <p>We visualize having a long-term relationship with our clients which is based on their satisfaction and our consistent performance. </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <i className="fa fa-star fa-2x"></i>
                <h4 className="mt-3">Experience</h4>
                <p>Our company is having vast experience in the field of Lookout & Tagout. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
