const ServiceCard = ({service}) => {

    return ( 
        <div className="service_card animate__animated animate__fadeInRight">
            <p className="service-id">{service.id}</p>
            <h2 className="service_title">{service.name}</h2>
            <p className="service_descr">{service.desc}</p>
            {/* <span>show More <i class="bi bi-arrow-right-short"></i></span> */}
        </div>
     );
}
 
export default ServiceCard;