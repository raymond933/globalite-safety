import Link from "next/link";
import styles from "./page.module.css";

export default function Career(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Career</h2>
                <div className="breadcrumb">
                    <Link href="/">Home</Link> | Career
                </div>
            </div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <p>At Globalite Safety Solutions Pvt. Ltd., we are committed to fostering a dynamic and inclusive work environment. We believe in nurturing talent, encouraging innovation, and providing opportunities for professional growth. If you are passionate about industrial safety and eager to contribute to a leading company in the Lockout Tagout industry, we invite you to explore career opportunities with us.</p>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="text-center mb-4">
                            <h2 className="text-red">Apply Now</h2>
                            <p>Please fill out the form below to submit your application. We look forward to learning more about you and how you can contribute to our team.</p>
                        </div>
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <form>
                                    <div className="row mb-4">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                            <input type="text" name="name" className="form-control" placeholder="Full Name"/>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                            <input type="email" name="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                            <input type="tel" name="phone" className="form-control" placeholder="Contact no."/>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                            <input type="text" name="address" className="form-control" placeholder="Address"/>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <label>Upload your Resume</label>
                                            <input type="file" name="upload" className="form-control" placeholder="Upload Your Resume"/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger">Apply Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}