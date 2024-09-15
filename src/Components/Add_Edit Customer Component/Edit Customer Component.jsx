// src/components/AddEditCustomer.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css"


const AddEditCustomer = () => {
  const [newNumber, setNewNumber] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [costmer, setCustomer] = useState("")


  const { id } = useParams();
  const navigate = useNavigate();
  let odlnumber = id


  const fetchCustomer = async () => {
    console.log("tttt", odlnumber);

    try {
      const response = await axios.put(`http://localhost:5000/user_management_Edit`, {
        "Phone_Number": odlnumber,
        "new_Phone_Number": newNumber,
        "Email": ""
      });
      setCustomer(response.data);
      console.log(response.data.message);
      window.location.href = "/CustomerList";

    } catch (error) {
      console.error('Error fetching customer:', error);
    }
  };



  return (
    <div>
      <div className="col-md-12">
        <div className="col-md-5 from_1">
          <form className='from_c'>
            <h3 className='signup' style={{ textAlign: "center", color: "white" }}>Edit Customer</h3>

            <div class="mb-3">
              <label for="exampleInputNum" class="form-label">Old Number</label>
              <input type="number" class="form-control" value={id} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">New Number</label>
              <input type="number" class="form-control" onChange={(e) => setNewNumber(e.target.value)} id="exampleInputPassword1" />
            </div>
            <input class="btn btn-primary btn_sub" value="Submit" onClick={() => fetchCustomer()} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditCustomer;
