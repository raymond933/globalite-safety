import Image from "next/image";
import styles from "./page.module.css";

export default function MachineSpecificProcedures(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Machine Specific Procedures</h2>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 text-center">
                        <p>At Globalite Safety, we offer comprehensive services for creating machine-specific procedures for energy isolation, ensuring maximum safety and compliance in your workplace. Our customized solution helps your organization effectively control hazardous energy during servicing and maintenance activities.</p>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-red">What We Do</h2>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <div className="card border-0 shadow h-100">
                            <div className="card-body text-center">
                                <Image src="/images/energy-control.png" width={80} height={80} className="img-fluid" alt=""/>
                                <h6 className="mt-3">Customized Energy Control Procedures</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <div className="card border-0 shadow h-100 bg-light">
                            <div className="card-body text-center">
                                <Image src="/images/electric-factory.png" width={80} height={80} className="img-fluid" alt=""/>
                                <h6 className="text-red mt-3">Identification and Isolation of Energy Sources</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <div className="card border-0 shadow h-100">
                            <div className="card-body text-center">
                                <Image src="/images/line-chart.png" width={80} height={80} className="img-fluid" alt=""/>
                                <h6 className="mt-3">Visual and Graphical Aids</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                        <div className="card border-0 shadow h-100 bg-light">
                            <div className="card-body text-center">
                                <Image src="/images/training.png" width={80} height={80} className="img-fluid" alt=""/>
                                <h6 className="text-red mt-3">Training and Implementation</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <h4 className="mb-3">Benefits of Implementing Machine-Specific Energy Isolation Procedures</h4>
                        <ul>
                            <li><strong>Enhanced Workplace Safety:</strong> Proper energy isolation significantly reduces the risk of accidents and injuries caused by uncontrolled hazardous energy.</li>
                            <li><strong>Regulatory Compliance:</strong> Ensures adherence to OSHA standards, helping avoid fines and improving overall safety compliance.</li>
                            <li><strong>Operational Efficiency:</strong> Clear and accessible procedures minimize downtime during maintenance, enhancing productivity.</li>
                            <li><strong>Employee Confidence:</strong> Well-trained employees can perform their tasks safely and efficiently, boosting overall morale and safety culture.</li>
                        </ul>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                        <h4 className="mb-3">Why Choose Globalite Safety?</h4>
                        <ul>
                            <li><strong>Expertise and Experience:</strong> With years of experience in safety solutions, we bring unparalleled expertise to develop effective energy isolation procedures tailored to your needs.</li>
                            <li><strong>Comprehensive Approach:</strong> From hazard identification to detailed procedural documentation and training, we cover all aspects to ensure your safety program is robust and effective.</li>
                            <li><strong>Commitment to Safety:</strong> Our primary goal is to create a safer work environment, protecting your employees and equipment from the dangers of hazardous energy.</li>
                        </ul>
                    </div>
                    <div className="col-12 mt-4">
                        <p>Contact us today to learn more about our machine-specific energy isolation services and how we can assist your organization in creating a safer and more compliant workplace.</p>
                        <p>By choosing Globalite Safety, you are investing in the safety and efficiency of your operations, ensuring that all hazardous energy sources are effectively managed and controlled.</p>
                    </div>
                </div>
            </div>
        </>
    );
}