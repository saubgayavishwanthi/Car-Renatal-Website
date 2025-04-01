import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MyNavbar from "./MyNavbar";

const ReservationForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [extras, setExtras] = useState([]);

  const handleExtrasChange = (event) => {
    const { value, checked } = event.target;
    setExtras((prevExtras) =>
      checked ? [...prevExtras, value] : prevExtras.filter((e) => e !== value)
    );
  };

  return (
    <div>
      <MyNavbar/>
      <div className="m-5 bg-body-tertiary">
    <Form className="p-">
      <Row>
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Your Email Address</Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="contactNumber">
            <Form.Label>Your Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="flightNumber">
            <Form.Label>Flight Number</Form.Label>
            <Form.Control type="text" placeholder="Flight Number" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="serviceType">
        <Form.Label>What kind of Service do you want?</Form.Label>
        <Form.Control
          as="select"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="">Please Choose an Option</option>
          <option value="wedding">Wedding Car Rental</option>
          <option value="rent">Rent A Car</option>
          <option value="airport">Airport & Hotel Transfer</option>
        </Form.Control>
      </Form.Group>

      {(serviceType === "wedding" || serviceType === "rent" || serviceType === "airport") && (
        <Row>
          <Col md={6}>
            <Form.Group controlId="pickupLocation">
              <Form.Label>Vehicle Pickup Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Pickup Location" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="pickupDate">
              <Form.Label>Pickup Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
      )}

      {serviceType === "rent" && (
        <Row>
          <Col md={6}>
            <Form.Group controlId="dropoffLocation">
              <Form.Label>Vehicle Dropoff Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Dropoff Location" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dropoffDate">
              <Form.Label>Dropoff Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
      )}

      {serviceType === "airport" && (
        <Row>
          <Col md={6}>
            <Form.Group controlId="dropoffLocation">
              <Form.Label>Dropoff Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Dropoff Location" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="pickupTime">
              <Form.Label>Pickup Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Col>
        </Row>
      )}

      {(serviceType === "rent" || serviceType === "airport") && (
        <>
          <Form.Group controlId="numPassengers">
            <Form.Label>Number of Passengers</Form.Label>
            <Form.Control type="number" min="1" />
          </Form.Group>

          <Form.Group controlId="extras">
            <Form.Label>Extras</Form.Label>
            <div>
              {[
                { name: "Toddler Seat", price: "$5/day" },
                { name: "Baby Seat", price: "$7/day" },
                { name: "Booster Seat", price: "$6/day" },
                { name: "GPS Device", price: "$10/day" },
              ].map((extra) => (
                <Form.Check
                  key={extra.name}
                  type="checkbox"
                  label={`${extra.name} (${extra.price})`}
                  value={extra.name}
                  onChange={handleExtrasChange}
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group controlId="license">
            <Form.Label>Do you need a Sri Lanka Driver's License?</Form.Label>
            <Form.Control as="select">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>
        </>
      )}

      <Form.Group controlId="otherRequirements">
        <Form.Label>Other Requirements</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter any other requirements" />
      </Form.Group>

      <Row className="mt-3">
        <Col>
          <Button variant="dark" type="reset">Clear</Button>
        </Col>
        <Col>
          <Button variant="primary" type="submit">Make a Reservation</Button>
        </Col>
      </Row>
    </Form>
    </div>
    </div>
  );
};

export default ReservationForm;
