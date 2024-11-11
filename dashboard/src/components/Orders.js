import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]); // State to hold the orders data

  // Fetch orders data from the backend on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3001/allOrders") // Backend endpoint for fetching orders
      .then((res) => {
        // Parse the data to ensure proper number formatting
        const parsedOrders = res.data.map((order) => ({
          ...order,
          qty: Number(order.qty), // Convert qty to a number
          price: Number(order.price), // Convert price to a number
        }));
        setOrders(parsedOrders); // Set the parsed data to state
      })
      .catch((err) => {
        console.error("Error fetching orders:", err); // Handle any errors
      });
  }, []); // Empty array means it runs once when the component is mounted

  return (
    <div className="orders">
      {orders.length === 0 ? (
        // If no orders, display a message to get started
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        // If orders are present, display them in a table
        <>
          <h3>Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Mode</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>{(order.price*order.qty).toFixed(2)}</td>
                    <td>{order.mode}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td> {/* Format the date */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
