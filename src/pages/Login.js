import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Login.css";
import { Link } from "react-router-dom";

import axios from "axios";


function Login() {

    const [isSignup, setIsSignup] = useState(false);


    const [formData, setFormData] = useState({

        username: "",
        password: "",

    });


    const navigate = useNavigate();



    const toggleSignup = () => {

        setIsSignup(!isSignup);

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormData({ ...formData });
        // sessionStorage.setItem()
        // try {
        //   const response = await axios.get("http://localhost:8080/api/customer/login", {
        //     params: {
        //       username: "dakshbh", 
        //       password: "pass"
        //     }
        //   }
        //   )
        // }
        // catch (error){
        //     alert(error.response.data.message);

        //     console.error("Login error:", error.response.data.message);
        // }
        try {
            const jsonData = {
                username: 'raghavp',
                password: '123'
            }
            const res = await axios.post("http://localhost:8080/api/customer/login", formData)
            // console.log(res.data);
            if(res.data.error === undefined) {
                navigate('/profile', { state: res.data.data });
            }
            else {
                alert(res.data.error);
            }
            //   const response = await axios.get('http://localhost:8080/api/customer/login', 
            // //   {
            // //     params: {
            // //         username: 'dakshbh',
            // //         password: 'pass'

            // //     }
            // //    }

            //   { data : jsonData}
            //   );
            //   alert("done");
            //   console.log('Data:', response.data);
            //   // Handle the response data here
            // } catch (error) {
            //   console.error('Error:', error);
            //   alert(error)
            //   // Handle errors here
            // }

            // fetch("http://localhost:8080/api/customer/login", 
            // {method: 'POST', body: JSON.stringify(jsonData)})
            //     .then((response) => response.json())
            //     .then((data) => console.log(data))
            //     .catch((error) => console.error("Error fetching user data:", error));
            


        } catch(e) {
            
        alert(e.res.data.message);
        console.error("Login error:", e.res.data.message);
        }
        };





        const handleSubmit = async (e) => {

            e.preventDefault();



            try {

                const response = await axios.post("http://localhost:8080/api/customer/putCustomer", {

                    family: {
                        username: formData.username,

                        password: formData.password,

                        plan: formData.plan
                    },

                    firstName: formData.firstName,

                    lastName: formData.lastName,

                    dateOfBirth: formData.dateOfBirth,

                    gender: formData.gender,

                    "id-type": "Adhaar",

                    "id-number": "12345"

                });



                // sign up success responce here

                console.log("Signup successful:", response.data);
                alert("Signup successful, now you can login");



                // userdetail page redirect krne k liye

                // navigate('/userdetails');

            } catch (error) {

                // signup error

                console.error("Signup error:", error);

            }

        }


        const handleInputChange = (e) => {

            setFormData({

                ...formData,

                [e.target.name]: e.target.value,

            });

        };



        return (

            <div className="container-login container" >

                <h1 className="header">LOGIN</h1>

                <form onSubmit={onSubmit}>


                    <>

                        <input className="input-style"

                            type="text"

                            name="username"

                            placeholder="Username"

                            value={formData.username}

                            onChange={handleInputChange}

                            required

                        />

                        <input className="input-style"

                            type="password"

                            name="password"

                            placeholder="Password"

                            value={formData.password}

                            onChange={handleInputChange}

                            required

                        />

                    </>
                    <button type="submit">{"Login"}</button>

                </form>

                <p>

                    {"Don't have an account? "}

                    <Link to="/sign-up"><button>{"Sign Up"}</button></Link>
                </p>

            </div>

        );

    }
    export default Login



// export default Login;

