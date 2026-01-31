import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function QualityPolicy(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Quality Policy</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Quality Policy
                </div>
            </div>
            <div className="container pt-5 pb-3">
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <h1 className="text-red">Quality Policy</h1>
                        <p>At Globalite Safety, we’re committed to providing the highest quality lockout tagout products and services to our customers around the world. Our quality policy is based on the following principles:</p>
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                        <div className="card h-100 border-0 shadow">
                            <Image src="/images/f8938f0986.jpg" width={1000} height={220} className="card-img-top" alt="" style={{objectFit:"cover"}}/>
                            <div className="card-body text-center">
                                <h4 className="text-red">Customer Satisfaction:</h4>
                                <p>We strive to exceed our customers’ expectations by providing the best lockout tagout products and services, with a focus on quality, reliability, and safety.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                        <div className="card h-100 border-0 shadow">
                            <Image src="/images/bdd23b5f84.jpg" width={1000} height={220} className="card-img-top" alt="" style={{objectFit:"cover"}}/>
                            <div className="card-body text-center">
                                <h4 className="text-red">Continuous improvement: </h4>
                                <p>We’re committed to continuously improving our processes, products, and services to ensure that we’re always delivering the best possible value to our customers. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                        <div className="card h-100 border-0 shadow">
                            <Image src="/images/e00e1b05dc.jpg" width={1000} height={220} className="card-img-top" alt="" style={{objectFit:"cover"}}/>
                            <div className="card-body text-center">
                                <h4 className="text-red">Compliance: </h4>
                                <p>We adhere to all relevant international safety standards and regulations, ensuring that our products and services meet or exceed the required safety requirements. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                        <div className="card h-100 border-0 shadow">
                            <Image src="/images/924704e188.jpg" width={1000} height={220} className="card-img-top" alt="" style={{objectFit:"cover"}}/>
                            <div className="card-body text-center">
                                <h4 className="text-red">Training and education:</h4>
                                <p>We believe that education and training are key to ensuring workplace safety, and we’re committed to providing expert training and support to our customers to help them implement and maintain their lockout tagout programs. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                        <div className="card h-100 border-0 shadow">
                            <Image src="/images/581e77ebc9.jpg" width={1000} height={220} className="card-img-top" alt="" style={{objectFit:"cover"}}/>
                            <div className="card-body text-center">
                                <h4 className="text-red">Employee involvement: </h4>
                                <p>We encourage and empower our employees to take ownership of the quality of our products and services and to continuously seek ways to improve our processes and operations. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                        <div className="card h-100 border-0 shadow">
                            <Image src="/images/86b50f4b2c.jpg" width={1000} height={220} className="card-img-top" alt="" style={{objectFit:"cover"}}/>
                            <div className="card-body text-center">
                                <h4 className="text-red">Partnership and collaboration: </h4>
                                <p>We believe in building strong relationships with our customers and resellers, based on trust, respect, and mutual benefit. We work closely with our customers to understand their unique needs and challenges, and to provide customized solutions that meet their specific requirements. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}