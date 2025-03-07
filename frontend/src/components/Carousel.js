import Carousel from "react-bootstrap/Carousel";
import wedding from '../assets/carsousel/Wedding Car.jpg';
import family from '../assets/carsousel/family.jpg';
import friends from '../assets/carsousel/friends.jpg';
import frontview from '../assets/carsousel/frontview.jpg';
import sideview from '../assets/carsousel/sideview.jpg';
import first from '../assets/carsousel/first.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  img-fluid"
            src={first}
            alt="First slide"
            style={{ height: "605px", objectFit: "cover" }} 
          />
          <Carousel.Caption>
            <h1>SL QUICK RIDE</h1>
        
          <button className="btn btn-outline-light px-4 py-2" style={{ 
    backgroundColor: "rgba(37, 34, 34 , 0.7)", 
    border: "3px solid white", 
    width: "150px", 
    height: "60px", 
    color: "white", 
    fontSize: "20px",
    fontWeight:"500" ,
    marginBottom:"100px",
  }}>Rent Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  img-fluid"
            src={frontview}
            alt="Second slide"
            style={{ height: "605px", objectFit: "cover" }} 
          />
          <Carousel.Caption>
          <h1>SL QUICK RIDE</h1>
          <button className="btn btn-outline-light px-4 py-2" style={{ 
    backgroundColor: "rgba(37, 34, 34 , 0.5)", 
    border: "3px solid white", 
    width: "150px", 
    height: "60px", 
    color: "white", 
    fontSize: "20px",
    fontWeight:"500" ,
    marginBottom:"100px",
  }}>Rent Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  img-fluid"
            src={family}
            alt="Third slide"
            style={{ height: "605px", objectFit: "cover" }} 
          />
          <Carousel.Caption>
          <h1>SL QUICK RIDE</h1>
          <button className="btn btn-outline-light px-4 py-2" style={{ 
    backgroundColor: "rgba(37, 34, 34 , 0.5)", 
    border: "2px solid white", 
    width: "150px", 
    height: "60px", 
    color: "white", 
    fontSize: "20px",
    fontWeight:"500" ,
    marginBottom:"100px",
  }}>Rent Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  img-fluid"
            src={wedding}
            alt="Fourth slide"
            style={{ height: "605px", objectFit: "cover" }} 
          />
          <Carousel.Caption>
          <h1>SL QUICK RIDE</h1>
          <button className="btn btn-outline-light px-4 py-2" style={{ 
    backgroundColor: "rgba(37, 34, 34 , 0.5)", 
    border: "3px solid white", 
    width: "150px", 
    height: "60px", 
    color: "white", 
    fontSize: "20px",
    fontWeight:"500" ,
    marginBottom:"100px",
  }}>Rent Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  img-fluid"
            src={friends}
            alt="Fifth slide"
            style={{ height: "605px", objectFit: "cover" }} 
          />
          <Carousel.Caption>
          <h1>SL QUICK RIDE</h1>
          <button className="btn btn-outline-light px-4 py-2" style={{ 
    backgroundColor: "rgba(37, 34, 34 , 0.5)", 
    border: "3px solid white", 
    width: "150px", 
    height: "60px", 
    color: "white", 
    fontSize: "20px",
    fontWeight:"500" ,
    marginBottom:"100px",
  }}>Rent Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
