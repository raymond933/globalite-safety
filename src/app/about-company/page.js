import Image from "next/image";
import styles from "./page.module.css";

export default function AboutCompany(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>About Company</h2>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <Image src="/images/a0a9fede8d.jpg" width={1000} height={750} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="text-red mb-1">[About Company]</div>
                        <h1>About Globalite Safety</h1>
                        <p className={styles.p}>Globalite Safety Solutions Private Limited is a pioneer in the manufacturing and export of premium-quality Lockout Tagout (LOTO) safety solutions. We offer specialized and innovative solutions that ensure energy isolation, workplace safety, effective site management, safeguarding personnel, and preventing workplace accidents. Acknowledging the critical needs of the industries in addressing potential safety hazards, we meticulously manufacture each and every product to prevent accidental leakage of hazardous gases.</p>
                        <p className={styles.p}>Upholding the highest certifications, including ISO 9001:2008, ISO 14001:2015, and ISO 45001:2018, we offer a comprehensive range of products, including lockouts, padlocks, hasps, valve lockouts, lockout stations, and electrical lockout devices. All our products show compliance with OSHO standards for The Control of Hazardous Energy (Lockout/Tagout) – Title 29 CFR Part 1910.147.</p>
                    </div>
                    <div className="col-12 mt-3">
                        <p className={styles.p}>Apart from industry-leading safety products, we also provide customizable options at competitive prices. We always prioritize workplace safety and are thus dedicated to delivering only effective, competent, and sustainable energy isolation solutions. We assure you to have peace of mind in your operations being safe and compliant with the highest industry standards.</p>
                    </div>
                </div>
            </div>
            <div className={styles.section02}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center">
                            <div className="mb-3">[Our Vision, Mission & Value]</div>
                            <h2>Where vision meets action and values lead the way.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5" style={{marginTop:-200}}>
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="card border-0 shadow h-100">
                            <div className="card-body text-center">
                                <div><Image src="/images/partners.png" width={60} height={60} className="img-fluid" alt=""/></div>
                                <h3 className="mt-4 text-red">Our Team</h3>
                                <div className={styles.divider}></div>
                                <p className={styles.text14}>With a team of highly competent and skilled technicians, we are committed to deliver top-notch products to create a safe working environment. Leveraging the latest technologies and using high-quality raw materials, we have built a strong reputation among our customers and delivered excellence in our services.</p>
                                <p className={styles.text14}>We are immensely proud of our high-quality LOTO solutions and always strive to deliver the best products and services to our clients and customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="card border-0 shadow h-100">
                            <div className="card-body text-center">
                                <div><Image src="/images/vision.png" width={60} height={60} className="img-fluid" alt=""/></div>
                                <h3 className="mt-4 text-red">Our Vision</h3>
                                <div className={styles.divider}></div>
                                <p className={styles.text14}>Globalite Safety Solutions envisions itself as a global leader in the Lockout tagout industry, recognized by our uniting commitment towards safety, innovation, sustainability and customer satisfaction. Aiming to offer a safe workplace worldwide, we are dedicated to delivering superior quality safety products and services and continuously update our products through innovation.</p>
                                <p className={styles.text14}>To achieve our vision, we wish to educate and empower our customers through essential training, tools and support to foster a safe and productive working environment.</p>
                            </div>
                        </div>
                    </div>                    
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="card border-0 shadow h-100">
                            <div className="card-body text-center">
                                <div><Image src="/images/target.png" width={60} height={60} className="img-fluid" alt=""/></div>
                                <h3 className="mt-4 text-red">Our Mission</h3>
                                <div className={styles.divider}></div>
                                <p className={styles.text14}>We, at Globalite Safety Solutions, put safety above all else. We are dedicated to empower industries and organizations with our superior Lockout tagout (LOTO) products, regulated by international safety standards. With our comprehensive LOTO solutions, we wish to ensure workers’ protection and prevent accidents, allowing workers to work confidently and securely at the workplace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}