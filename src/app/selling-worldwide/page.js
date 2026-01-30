import Image from "next/image";
import styles from "./page.module.css";

export default function SellingWorldwide(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Selling Worldwide</h2>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <p className={styles.p}>We understand that different regions have different safety regulations and standards, and we strive to comply with all relevant regulations to ensure the safety and wellbeing of our customers. Our products are designed and manufactured with the highest quality materials and meet or exceed industry standards, making them suitable for use in a variety of industries.</p>
                        <p className={styles.p}>Our extensive network of distributors and partners around the world allows us to sell our products in different countries and regions. We work closely with our partners to ensure that our products are readily available to customers, and our dedicated sales team is always available to answer any questions and provide support to our customers.</p>
                        <p className="text-center">
                            <Image src="/images/map-img.png" width={800} height={556} className="img-fluid" alt=""/>
                        </p>
                        <p className={styles.p}>We are proud to serve a wide range of industries, including manufacturing, construction, energy, and more. Our customers trust us to provide them with the best lockout tagout products and solutions, and we’re committed to delivering on that trust every day</p>
                        <p className={styles.p}>Whether you are in the United States, Europe, Asia, or any other part of the world, you can trust Globalite Safety to provide you with the best lockout tagout safety products and exceptional customer service. We are committed to providing a safe and secure workplace for all our customers worldwide, and we look forward to serving you.</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <Image src="/images/c57290cdf5.jpg" width={1000} height={668} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 align-self-center">
                        <h2 className="text-red">Become Our Distributor</h2>
                        <p>Are you interested in becoming a distributor of Globalite Safety Lockout Tagout products in your country? As a distributor, you will have the opportunity to bring our high-quality lockout tagout safety products to businesses and organizations in your region, helping them maintain compliance with safety regulations and protect their employees. Fill up the form below to connect with our LOTO expert team.</p>
                    </div>
                </div>
            </div>
        </>
    );
}