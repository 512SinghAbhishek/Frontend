// src/components/CustomerList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedUser = window.sessionStorage.getItem('User_data'); // Get the item first

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser); // Parse only if it exists
        let phone = parsedUser;

        if (!phone) {
          window.location.href = '/Login_patient'; // Redirect if phone is null or undefined
        }

        console.log("storedUser phone:", phone);
      } else {
        // Redirect to login if 'User_data' is not found in sessionStorage
        window.location.href = '/Login_patient';
      }
    }
  }, []);


  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.post('http://localhost:5000/management_history', {
        "Phone_Number": "",
        "email": ""
      }); // Replace with actual API
      setCustomers(response.data);
      console.log("Rammm", response.data);


    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const deleteCustomer = async (value) => {
    try {
      const response = await axios.delete('http://localhost:5000/user_management_status', {
        params: { Phone_Number: value } // Send Phone_Number as a query parameter
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Customer List</h1>

      <hr />
      <div>
        <th className='col-md-12'>
          {customers.map((customer) => (
            // <table class="table">
            <tr className='' key={customer.id}>
              <td> {customer.Full_name}</td>
              <td>{customer.email}</td>
              <td> <Link className='btn btn-primary ' to={`/edit/${customer.Phone_Number}`}>Edit</Link>  </td>
              <td><input class="btn btn-danger" value="Delete" onClick={() => deleteCustomer(customer.Phone_Number)} /></td>

            </tr>
            // </table>
          ))}
        </th>
      </div>
      <hr />
      <Link className='btn btn-primary' to="/add">Add New Customer</Link>
    </div>
  );
};

export default CustomerList;
