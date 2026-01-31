import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function WhyChooseGlobalite(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Why Choose Us</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Why Choose Us
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.wcuBox}>
                            <div className={styles.box01}>
                                <Image src="/images/a6ecc24aaf.jpg" width={1000} height={667} className="img-fluid" alt=""/>
                            </div>
                            <div className={styles.box02}>
                                <h2>Superior Quality Products</h2>
                                <p>We pride ourselves on offering the best lockout tagout safety products in the industry. Our products undergo rigorous testing to ensure durability, reliability, and compliance with global safety standards. When you choose Globalite Safety, you can have peace of mind knowing that you are investing in top-quality solutions.</p>
                            </div>
                        </div>

                        <div className={styles.wcuBox}>
                            <div className={styles.box01}>
                                <Image src="/images/a79a75ba4f.jpg" width={1000} height={563} className="img-fluid" alt=""/>
                            </div>
                            <div className={styles.box02}>
                                <h2>Extensive Product Range</h2>
                                <p>Our comprehensive range of lockout tagout products includes lockout devices, safety padlocks, tags, and other essential safety equipment. We have carefully designed our product line to meet the diverse needs of various industries and work environments. No matter the size or complexity of your safety requirements, we have the right solution for you.</p>
                            </div>
                        </div>

                        <div className={styles.wcuBox}>
                            <div className={styles.box01}>
                                <Image src="/images/9dbed9be03.jpg" width={1000} height={618} className="img-fluid" alt=""/>
                            </div>
                            <div className={styles.box02}>
                                <h2>Global Research</h2>
                                <p>We have established a robust distribution network that spans across different continents. Wherever you are located, our products are readily available to you. We take pride in serving clients from all corners of the globe and are constantly expanding our reach to ensure easy accessibility to our exceptional safety products.</p>
                            </div>
                        </div>

                        <div className={styles.wcuBox}>
                            <div className={styles.box01}>
                                <Image src="/images/4cc350c2e1.jpg" width={1000} height={667} className="img-fluid" alt=""/>
                            </div>
                            <div className={styles.box02}>
                                <h2>Commitment to Workplace Safety</h2>
                                <p>We are passionate about creating safer work environments. By choosing Globalite Safety, you are joining a movement dedicated to preventing accidents, reducing injuries, and saving lives. We understand the importance of compliance with safety regulations and strive to provide the tools and expertise necessary to safeguard your employees.</p>
                            </div>
                        </div>

                        <div className={styles.wcuBox}>
                            <div className={styles.box01}>
                                <Image src="/images/31af318782.jpg" width={1000} height={615} className="img-fluid" alt=""/>
                            </div>
                            <div className={styles.box02}>
                                <h2>Exceptional Customer Service</h2>
                                <p>At Globalite Safety, our clients are our top priority. We believe in building long-lasting relationships with our customers based on trust, reliability, and superior service. Our dedicated team of professionals is always ready to assist you with product inquiries, technical support, and any other assistance you may need. Your satisfaction is our ultimate goal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}