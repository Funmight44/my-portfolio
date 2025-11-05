import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ServiceCard = ({service}) => {
    useGSAP(() => {
        gsap.fromTo(".service_card", {opacity: 0, y: 50, duration: 1},
                {opacity:1, ease: "power3.out", stagger: 0.2 , duration:2}
        );
    }, [])

    return ( 
        <div className="service_card">
            <p className="service-id">{service.id}</p>
            <h2 className="service_title">{service.name}</h2>
            <p className="service_descr">{service.desc}</p>
            {/* <span>show More <i class="bi bi-arrow-right-short"></i></span> */}
        </div>
     );
}
 
export default ServiceCard;