import ServiceCard from "../components/servicesCard";
import servicesData from "../data/servicesData";


const Services = () => {
    return ( 
        <section className="services">
            {servicesData.map((service) => (
                <ServiceCard key={service.id} service={service}/>
            ))}
        </section>
     );
}
 
export default Services;