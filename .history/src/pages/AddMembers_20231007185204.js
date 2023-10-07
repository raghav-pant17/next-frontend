// 
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';



function AddUser(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    id_type: "",
    dob: "",
    id_number: "",
    gender: "",
    username:""
  });

  const { first_name, last_name, id_type, dob, id_number } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    user.username=data[0].family.username;
    setUser(user);
      const userData = await axios.post("http://localhost:8080/api/customer/addFamilyMember", user);
      //debugger
      data.push(userData.data.data);
    navigate("/profile",{ state: data} );
  };

  const handleCancel = async (e) => {
    navigate("/profile",{ state: data} );
  }
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"> */}
        {/* <h2 className="text-center m-4">Creat Customer</h2> */}
        <div>
          <h2> {props.title}</h2>

          <form
            onSubmit={(e) => onSubmit(e)
            }
          >
            <div className="container">
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
                    value={first_name}
                    onChange={(e) => onInputChange(e)}
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
                    value={last_name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>

                <div className="mb-3 col">
                  <label htmlFor="DOB" className="form-label">
                    Date of birth:
                  </label>
                  {/* <input type="date" name="begin" 
        placeholder="dd-mm-yyyy" value=""
        min="1997-01-01" max="2030-12-31"> */}
                  <input
                    type={"date"}
                    className="form-control"
                    placeholder="dd-mm-yyyy"
                    name="dob"
                    value={dob}
                    onChange={(e) => onInputChange(e)}
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
                    value={id_number}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select class="form-select" aria-label="Default select example" onChange={(e) => onInputChange(e)} value={user.gender} required>
                    <option name="id_number" selected>Open this select menu</option>
                    <option name="id_number" value="Male">Male</option>
                    <option name="id_number" value="Female">Female</option>
                    <option name="id_number" value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button className="btn btn-outline-danger mx-2" onClick={()=>this.handleCancel}>
              Cancel
            </button>
          </form>
        </div >
      </div >
    </div >

  )
}

export default AddUser;