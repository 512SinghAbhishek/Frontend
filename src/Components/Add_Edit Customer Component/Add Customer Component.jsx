import React, { useState } from 'react';
import "./Signup.css"
import axios from 'axios';

function Add_Customer_Component() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [select, setSelect] = useState("");


    const Signup_API = async () => {
        try {
            let res = await axios.post("http://localhost:5000/register", {
                "Full_name": name,
                "Phone_Number": number,
                "email": email,
                "Password": password,
                "Role": select
            })
            res = res.data
            console.log("Ram", res);
            if (res.message == "Registration successful") {
                window.location.href = "/CustomerList";
            }
        }
        catch {
            console.log("Somthing Error in Signup API");

        }
    }


    return (
        <div>
            <div className="col-md-12">
                <div className="col-md-5 from_1">
                    <form className='from_c'>
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">Name</label>
                            <input type="text" class="form-control" onChange={(e) => setName(e.target.value)} id="exampleInputEmail" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputNum" class="form-label">Contact Number</label>
                            <input type="number" class="form-control" onChange={(e) => setNumber(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
                        </div>
                        <div class="dropdown">
                             <label for="exampleInputPassword1" class="form-label">Select</label>
                            <select className="form-select" onChange={(e) => setSelect(e.target.value)} aria-label="Default select example">
                                <option value="">Select</option>
                                <option value="1">User</option>
                                <option value="2">Admin</option>

                            </select>
                        </div>
                        <input class="btn btn-primary btn_sub" value="Submit" onClick={() => Signup_API()} />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Add_Customer_Component