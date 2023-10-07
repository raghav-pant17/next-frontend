import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';
// import "./Login.css";


function Signup(props) {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    id_type: "",
    dob: "",
    id_number: "",
    gender: "",
    plan: "",
    username: "",
    password: "",
    confirmPassword: ""
  });


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (user.password != user.confirmPassword) {
      alert("Password and Confirm Password don't match.");
    }
    else {
      setUser({ ...user })
      console.log(user)
      try {
        await axios.post("http://localhost:8080/api/customer/putCustomer", {
          first_name: user.first_name,
          last_name: user.last_name,
          id_type: user.id_type,
          dob: user.dob,
          id_number: user.id_number,
          gender: user.gender,
          family: {
            username: user.username,
            password: user.password,
            plan: user.plan
          }
        }
        );
        alert("sign-up done");
        navigate("/login");
      }
      catch (e) {
        alert("sign-up error");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="d-flex align-items-center justify-content-center" >
            <h1 className="header"> SIGN UP </h1>
          </div>
          <form
            onSubmit={(e) => onSubmit(e)
            }
          >
            <div>
              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your first name"
                    name="first_name"
                    value={user.first_name}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your last name"
                    name="last_name"
                    value={user.last_name}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>

                <div className="mb-3 col">
                  <label htmlFor="DOB" className="form-label">
                    Date of birth:
                  </label>
                  <input
                    type={"date"}
                    className="form-control"
                    placeholder="dd-mm-yyyy"
                    name="dob"
                    value={user.dob}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="id type" className="form-label">ID type</label>
                  <select className="form-select" aria-label="Default select example" name="id_type" onChange={(e) => onInputChange(e)} value={user.id_type} required>
                    <option value="">Open this select menu</option>
                    <option name="id_type" value="Aadhar Number">Aadhar Number</option>
                    <option name="id_type" value="PAN Number">PAN Number</option>
                    <option name="id_type" value="Passport Number">Passport Number</option>
                  </select>
                </div>
                <div className="mb-3 col">
                  <label htmlFor="id number" className="form-label">
                    ID Number
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your ID number"
                    name="id_number"
                    value={user.id_number}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select class="form-select" aria-label="Default select example" onChange={(e) => onInputChange(e)} name="gender" value={user.gender} required>
                    <option value="">Open this select menu</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row" >
              <div className="col-lg-4 col-lg-offset-4 mb-3">
                <label htmlFor="plan" className="form-label">Select one plan</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => onInputChange(e)} name="plan" value={user.plan} required>
                  <option value="">Open this select menu</option>
                  <option value="silver">Silver</option>
                  <option value="gold">Gold</option>
                  <option value="platinum">Platinum</option>

                </select>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="username">Username</label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="password">Password</label>
                  <input
                    type={"password"}
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={user.password}
                    onChange={(e) => onInputChange(e)}
                  /></div>
                <div className="mb-3 col">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    type={"password"}
                    className="form-control"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>

              </div>
            </div>


            <br />
            <div className="d-flex align-items-center justify-content-center">
              <div class="p-2 m-2">
                <p>
                  <button type="submit">
                    Sign Up
                  </button>
                </p>
              </div>
              <div class="p-2 m-2">
                <p>

                  {" Already have an account? "}
                  <Link to="/login"><button>Login</button></Link>

                </p>
              </div>
            </div>
          </form>
        </div >
      </div >
    </div >

  )
}

export default Signup;