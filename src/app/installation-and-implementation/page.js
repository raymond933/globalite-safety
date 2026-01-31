import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function InstallationAndImplementation(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Installation and Implementation</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Installation and Implementation
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 text-center">
                        <p className={styles.textlarge}>At Globalite Safety, we offer specialized services for the installation and implementation of Lockout Tagout (LOTO) systems. Our comprehensive approach ensures that your workplace is equipped with the best safety measures to control hazardous energy during maintenance and servicing activities. Here’s a detailed overview of our LOTO services:</p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4 align-self-center">
                        <h4>Key Features of Our LOTO Installation and Implementation Services:</h4>
                        <ul>
                            <li>Detailed Procedure Development</li>
                            <li>Energy Source Identification</li>
                            <li>Visual and Physical Aids</li>
                            <li>Training and Support</li>
                            <li>Performance Review and Compliance</li>
                        </ul>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <Image src="/images/b281f3713f.jpg" className="img-fluid shadow rounded-3" width={1000} height={500} alt=""/>
                    </div>
                </div> */}
            </div>
            {/* <div className="container py-4">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <Image src="/images/b32137c5e6.jpg" width={1000} height={596} className="img-fluid shadow rounded-3" alt=""/>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <h4>Benefits of Our LOTO Services</h4>
                        <ul>
                            <li><strong>Enhanced Safety:</strong> Proper installation and implementation of LOTO procedures significantly reduce the risk of workplace accidents and injuries caused by uncontrolled hazardous energy.</li>
                            <li><strong>Regulatory Compliance:</strong> Adhering to OSHA standards not only ensures safety but also helps avoid fines and enhances your company’s reputation.</li>
                            <li><strong>Operational Efficiency:</strong> Clear and well-documented procedures minimize downtime during maintenance, leading to increased productivity.</li>
                            <li><strong>Employee Confidence:</strong> Well-trained employees can perform their tasks safely and efficiently, fostering a culture of safety and confidence in the workplace.</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4 align-self-center">
                        <h4>Why Choose Globalite Safety?</h4>
                        <ul>
                            <li><strong>Expertise and Experience:</strong> With extensive experience in safety solutions, we bring unmatched expertise to develop and implement effective LOTO procedures tailored to your specific needs.</li>
                            <li><strong>Comprehensive Approach:</strong> From hazard identification to detailed procedural documentation and training, we cover all aspects to ensure your LOTO program is robust and effective.</li>
                            <li><strong>Commitment to Safety:</strong> Our primary goal is to create a safer work environment, protecting your employees and equipment from the dangers of hazardous energy.</li>
                        </ul>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <Image src="/images/6d34264d06.jpg" width={1000} height={562} className="img-fluid shadow rounded-3" alt=""/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <p><strong>Contact us today to learn more about our Lockout Tagout installation and implementation services and how we can assist your organization in creating a safer and more compliant workplace.</strong></p>
                    </div>
                </div>
            </div> */}
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