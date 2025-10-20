import UseTitle from "../components/hook/useTitle";
import ServiceCard from "../components/servicesCard";
import servicesData from "../data/servicesData";


const Services = () => {
    UseTitle("services page")

    return ( 
        <section className="services">
            {servicesData.map((service) => (
                <ServiceCard key={service.id} service={service}/>
            ))}
        </section>
     );
}
 
export default Services;