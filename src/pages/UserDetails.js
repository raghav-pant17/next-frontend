// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./UserFamilyInfo.css";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import BasicModal from "../components/Modal";

// function UserDetails(props) {
//   const [userData, setUserData] = useState([]);
//   const [familyData, setFamilyData] = useState([]);

//   return (
//     <div>
//       <div className="container mt-5">
//         <h2 className="text-center mb-4">User and Family Information</h2>
//         <div className="row">
//           <div className="col-md-6">
//             <h3 className="mb-3">User Information</h3>
//             {userData.map((user) => (
//               <div key={user.id} className="card mb-3">
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {user.first_name} {user.last_name}
//                   </h5>
//                   <p className="card-text">
//                     <strong>Date of Birth:</strong>
//                     {user.dob}
//                     <br />
//                     <strong>Aadhar:</strong> {user.id_number}
//                     <br />
//                     <strong>ID Type:</strong> {user.id_type}
//                     <br />
//                     <strong>Gender:</strong> {user.gender}
//                     <br />
//                     <strong>Selected Plan:</strong> {user.family.plan}
//                     <br />
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="col-md-6">
//             <h3 className="mb-3">Family Information</h3>
//             {familyData.map((family) => (
//               <div key={family.id} className="card mb-3">
//                 <div className="card-body">
//                   <h5 className="card-title">{family.name}</h5>
//                   <p className="card-text">
//                     <strong>Relation:</strong> {family.relation}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <br />
//       <div className="buttons">
//         <Link className="btn btn-outline-primary mx-2" to="/add-user">
//           Add Members
//         </Link>
//         <br />
//         <div>
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDetails;
