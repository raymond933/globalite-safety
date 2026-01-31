import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function LotoTraining(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Loto Training</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Loto Training
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1>LOTO Training</h1>
                        <p>At Globalite Safety Solutions Pvt. Ltd., we are dedicated to providing comprehensive Lockout Tagout (LOTO) training services that prioritize safety and compliance. Our training programs are meticulously designed to empower your employees with the essential knowledge and skills necessary to implement proper LOTO procedures effectively. Here’s what you can expect from our training services:</p>
                        <h4 className="text-red">Benefits of Our LOTO Training Services</h4>
                        <ul>
                            <li>Enhanced Safety Awareness: Promotes a culture of safety and awareness among employees. </li>
                            <li>Accident Prevention: Reduces the risk of workplace accidents and injuries caused by improper handling of hazardous energy.</li>
                            <li>Improved Compliance: Ensures your organization meets all relevant safety standards and regulations.</li>
                            <li>Employee Empowerment: Empowers your workforce with the confidence and competence to perform LOTO procedures correctly.</li>
                        </ul>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <Image src="/images/84d010ee3e.jpg" width={1000} height={667} className="img-fluid shadow rounded-4" alt=""/>
                    </div>
                    <div className="col-12">
                        <h4 className="text-red">Why Choose Globalite Safety Solutions?</h4>
                        <ul>
                            <li>Proven Track Record: Trusted by leading manufacturing units and industries worldwide.</li>
                            <li>Comprehensive Coverage: Covers all aspects of LOTO, from basic principles to advanced techniques.</li>
                        </ul>
                        <p>Trust Globalite Safety Solutions Pvt. Ltd. to provide comprehensive and customized Lockout Tagout training that meets the highest standards of safety and compliance. Empower your employees with the skills they need to maintain a safe and secure workplace.</p>
                        <p><strong>For more information or to schedule a training session, please contact us.</strong></p>
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