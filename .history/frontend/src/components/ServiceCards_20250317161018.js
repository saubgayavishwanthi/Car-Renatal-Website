import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "../assets/Clock.jpeg"
import Briefcase from "../assets/Briefcase.png"
import Star from "../assets/Star.png"
import Users from "../assets/Users.png"
import ShieldAlt from "../assets/ShieldAlt."


const services = [
  {
    img: Briefcase,
    title: "Highly Professional Services",
    description:
      "We provide exceptional, exquisite transfer services to all our customers visiting or leaving Sri Lanka. Our outstanding and affordable Sri Lanka private transfers are fast, reliable, comfortable, and convenient."
  },
  {
    img: Star,
    title: "Quality Customer Services",
    description:
      "At SR Transfers, customer satisfaction is our priority. We ensure a smooth, comfortable, and stress-free experience with top-class services tailored to your needs."
  },
  {
    img: Clock,
    title: "Reliable Services",
    description:
      "We understand the importance of time. Our transfer services are punctual, prompt, and reliable. Our team monitors flight arrivals to ensure timely pickups without delays."
  },
  {
    img: Users,
    title: "Well Trained Team",
    description:
      "Our professional drivers have extensive knowledge of Colombo and other popular cities in Sri Lanka, ensuring a smooth and enjoyable journey for you."
  },
  {
    img: ShieldAlt,
    title: "High Safety Concerns",
    description:
      "Your safety is our priority. We ensure secure, well-maintained vehicles and highly trained drivers for a safe and stress-free journey."
  },
  {
    img: Clock,
    title: "24/7 Availability",
    description:
      "We offer 24/7 transfer services, ensuring that we are available at any time, even on weekends and public holidays."
  }
];

const ServiceCards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4">
            <div className="card text-center p-3 shadow-sm">
              <img src={service.img} alt="Icon" className="mx-auto mb-2" width="50" height="50" />
              <h5 className="fw-bold">{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
