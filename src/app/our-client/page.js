import Image from "next/image";
import styles from "./page.module.css";

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
        </>
    );
}