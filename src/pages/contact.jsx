import { useState } from "react";
import UseTitle from "../components/hook/useTitle";
import { Link } from "react-router-dom";

const Contact = () => {
  UseTitle("contact page")

    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "39cacce3-4b3e-4c6c-a5f5-176459dbb196");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };



    return ( 
        <section className="contact animate__animated animate__fadeInUp">
            <p className="contact-title">Get in touch </p>
            <div className="contact-session">
                <div className="contact-left">
                    <h1>Let's connect.</h1>
                    <p className="contact-para">I am readily available to take new projects, so feel free to send me a message on any of our services you want. </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p> <i class="bi bi-person-heart"></i></p>
                            <span>lahyor44@gmail.com</span>
                        </div>
                        <div className="contact-detail">
                            <p> <i class="bi bi-telephone"></i></p>
                            <span>07067325018.</span>
                        </div>
                        <div className="contact-detail">
                            <p> <i class="bi bi-geo-alt-fill"></i></p>
                            <span>Arobieye, idi-iroko road, Sango Ota, Ogun State, Nigeria.</span>
                        </div>
                        <div className="contact-detail">
                          <p><i class="bi bi-linkedin"></i></p>
                           <Link to="https://www.linkedin.com/in/akano-funmilayo44"><p>Linkedin</p></Link>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label>Write your name</label>
                    <input type="text" placeholder="Name" name="name" required/>
                    <label>Write your email</label>
                    <input type="email" placeholder="Email" name="email" required/>
                    <label>Write your Message</label>
                    <textarea placeholder="Write your message" rows="8" name="message" required></textarea>
                    <button type="submit">Submit</button>
                      <span>{result}</span>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;