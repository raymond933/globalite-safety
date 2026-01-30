import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function OurClient(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Our Clients</h2>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <ul className={styles.clients}>
                            <li><Image src="/images/clients/1.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/2.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/3.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/4.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/5.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/6.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/7.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/8.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/9.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/11.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/12.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/13.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/14.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/15.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/16.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                            <li><Image src="/images/clients/17.jpg" width={300} height={150} className="img-fluid" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Industries We Serve</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body p-4">
                                    <h4 className="text-red">Transportation and Logistics </h4>
                                    <p>From airports and seaports to warehouses and distribution centers, the transportation and logistics sector demands robust safety measures. Globalite Safety's lockout tagout products provide the necessary tools to control energy sources, minimizing the risks associated with equipment maintenance and repairs. Transportation and logistics clients trust us to keep their operations running smoothly and their employees safe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                            <div className="card shadow border-0 h-100 bg-secondary text-white">
                                <div className="card-body p-4">
                                    <h4>Energy and Utilities </h4>
                                    <p>The energy and utilities sector uses our cutting-edge lockout tagout products to safeguard their workers in high-risk environments. Oil and gas refineries, power plants, renewable energy facilities, and utility companies all benefit from our comprehensive range of safety devices. By choosing Globalite Safety, they demonstrate a commitment to protecting their workforce and minimizing operational risks. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body p-4">
                                    <h4 className="text-red">Construction and Engineering </h4>
                                    <p>In the construction and engineering industry, safety is paramount. Our lockout tagout solutions play a vital role in preventing accidents during construction, maintenance, and repair projects. Contractors, engineering firms, and construction companies rely on our products to secure hazardous energy sources, ensuring the well-being of their workers and compliance with safety standards. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                            <div className="card shadow border-0 h-100 bg-secondary text-white">
                                <div className="card-body p-4">
                                    <h4>Healthcare and Pharmaceuticals </h4>
                                    <p>The healthcare and pharmaceutical industries prioritize safety to protect patients and personnel. Globalite Safety’s lockout tagout products play a critical role in securing medical equipment, machinery, and electrical systems. Hospitals, laboratories, and pharmaceutical manufacturers rely on our solutions to ensure a safe and secure environment for medical professionals and patients alike. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body p-4">
                                    <h4 className="text-red">Manufacturing Units </h4>
                                    <p>Our lockout tagout solutions have been trusted by leading manufacturing companies. From automotive and aerospace to electronics and heavy machinery, our products help prevent accidents, increase productivity, and ensure compliance with safety regulations. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                            <div className="card shadow border-0 h-100 bg-secondary text-white">
                                <div className="card-body p-4">
                                    <h4>General Industries</h4>
                                    <p>Beyond the specific sectors mentioned, Globalite Safety’s clientage extends to various general industries, including hospitality, retail, entertainment, and more. These clients recognize the importance of employee safety and relying on our lockout tagout solutions to mitigate risks and ensure compliance with safety regulations. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className={styles.textLg}>Join our esteemed clientage and experience the unparalleled quality and reliability of Globalite Safety’s lockout tagout products. As a trusted manufacturer, we are committed to providing innovative solutions that prioritize workplace safety. Together, we can create a secure environment that protects your employees, assets, and reputation.</p>
                        <p><Link href="#" className="btn btn-dark btn-lg px-4">Contact Us</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}