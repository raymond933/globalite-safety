import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function LockoutTagoutPolicyAndProcedures(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Lockout Tagout Policy And Procedures</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Lockout Tagout Policy And Procedures
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 align-self-center">
                        <h1>Lockout Tagout Policy And Procedures</h1>
                        <p>At Globalite Safety, we specialize in providing lockout/tagout (LOTO) policy and procedures services. Our expertise lies in developing customized LOTO policies and procedures that prioritize safety, compliance, and employee well-being. With our clear and comprehensive documentation, we ensure that your organization has the necessary guidelines in place for effective LOTO implementation. Partner with us to enhance workplace safety through our LOTO policy and procedures service.</p>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <Image src="/images/dff9678d9f.jpg" className="img-fluid shadow rounded-4" width={1000} height={584} alt=""/>
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