import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageBooking = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 text-white bg-dark p-3 rounded">
        Manage Booking
      </h2>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>UserName</th>
            <th>E-mail</th>
            <th>Vehicle ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Price</th>
            <th>Booking Status</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty rows for now */}
          {[...Array(4)].map((_, index) => (
            <tr key={index}>
              <td colSpan="9" className="text-center">
                —
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center mt-3">
        <Button variant="danger" className="px-4 py-2">View</Button>
      </div>
    </Container>
  );
};

export default ManageBooking;
