import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'

function Login() {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const Login_API = async () => {
        try {
            let res = await axios.post("http://localhost:5000/login", {
                "Phone_Number": number,
                "Password": password,
            })
            res = res.data
            console.log("Ram", res);
            if (res.message === "success" && res) {
                sessionStorage.setItem('User_data', JSON.stringify(res.phone));  // Store user data in sessionStorage
                window.location.href = "/CustomerList";  // Redirect to customer list
            } else {
                console.error('Failed to save user data:', res.message);
                // Optionally, handle the error or show a message to the user
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
                        <h3 className='signup' style={{ textAlign: "center", color: "white" }}>Login</h3>
                        <div class="mb-3">
                            <label for="exampleInputNum" class="form-label">Contact Number</label>
                            <input type="number" class="form-control" onChange={(e) => setNumber(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
                        </div>
                        <input class="btn btn-primary btn_sub" value="Submit" onClick={() => Login_API()} />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login