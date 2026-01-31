import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function OurServices(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Our Services</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Our Services
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1>On Site LOTO Survey</h1>
                        <p>Globalite Safety offers a comprehensive on-site survey service for lockout/ tagout (LOTO) implementation. Our experienced team conducts thorough assessments of your facility, equipment, and energy sources to develop a customized LOTO program that meets your specific needs.</p>
                        <h4 className="text-red">During the on-site survey, our experts:</h4>
                        <ul>
                            <li>Conduct a facility walk through to assess all relevant areas, equipment, and energy sources.</li>
                            <li>Identify and document the specific energy sources associated with each piece of equipment.</li>
                            <li>Evaluate potential hazards related to energy sources, equipment design, and maintenance practices.</li>
                            <li>Review your current safety procedures and compare them to relevant regulations and best practices.</li>
                        </ul>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <Image src="/images/d79261ddbc.jpg" className="img-fluid shadow rounded-4" width={1000} height={667} alt=""/>
                    </div>
                    <div className="col-12">
                        <p>Based on the survey, we provide a detailed report of the survey findings, including energy source identification, hazard assessments, and compliance gaps. Our comprehensive report outlines recommended control measures and necessary modifications to your current procedures. This report serves as a roadmap for implementing effective LOTO practices in your facility.</p>
                        <p>Throughout the survey process, we value your input and collaborate closely with you. We engage in ongoing communication, addressing any concerns, answering questions, and gathering insights into your specific needs. Our goal is to ensure that the final LOTO program aligns with your organizational goals and promotes a safer work environment.</p>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <form>
                                <div className="row g-2">
                                    <div className="col-12 text-center">
                                        <h2 className="text-red">Enquiry Now</h2>
                                    </div>
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
        </>
    );
}