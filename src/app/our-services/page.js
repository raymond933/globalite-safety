import styles from "./page.module.css";

export default function OurServices(){
    return(
        <>
            <div className={styles.innerherobanner}>
                <h2>Our Services</h2>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1>On Site LOTO Survey</h1>
                        <p>Globalite Safety offers a comprehensive on-site survey service for lockout/ tagout (LOTO) implementation. Our experienced team conducts thorough assessments of your facility, equipment, and energy sources to develop a customized LOTO program that meets your specific needs.</p>
                        <h4 className="text-red">During the on-site survey, our experts:</h4>
                        <ul>
                            <li>Conduct a facility walk through to assess all relevant areas, equipment, and energy sources.</li>
                            <li>Identify and document the specific energy sources associated with each piece of equipment.</li>
                            <li>Evaluate potential hazards related to energy sources, equipment design, and maintenance practices.</li>
                            <li>Review your current safety procedures and compare them to relevant regulations and best practices.</li>
                        </ul>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    </div>
                    <div className="col-12">
                        <p>Based on the survey, we provide a detailed report of the survey findings, including energy source identification, hazard assessments, and compliance gaps. Our comprehensive report outlines recommended control measures and necessary modifications to your current procedures. This report serves as a roadmap for implementing effective LOTO practices in your facility.</p>
                        <p>Throughout the survey process, we value your input and collaborate closely with you. We engage in ongoing communication, addressing any concerns, answering questions, and gathering insights into your specific needs. Our goal is to ensure that the final LOTO program aligns with your organizational goals and promotes a safer work environment.</p>
                    </div>
                </div>
            </div>
        </>
    );
}