import React, { useState } from 'react';
import {Typography, Button, Stack } from '@mui/material';
import DataBox from './DataBox';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BasicModal from "../components/Modal";
import Modal from "@mui/material/Modal";
import SpacingGrid from "../pages/grid";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Profile() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [boxes, setBoxes] = useState(data);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAdd = () => {
    // // generate some random data for the new box
    // const data = Math.random().toString(36).substring(7);
    // // add the new box to the list
    // setBoxes([...boxes, data]);

    // setBoxes([...boxes, data]);
    
    navigate('/add-user', { state: data})
    //console.log(data[0].family);
  };

  return (
    <div>
      {/* <Stack direction="column" spacing={2}>
        {dataFam.map((box, index) => (
          <DataBox key={index} data={box} />
        ))}
      </Stack> */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        PROFILE
      </Typography> 
      <Stack direction="column" spacing={2}>
        {boxes.map((box, index) => (
          <DataBox key={index} data={box} />
        ))}
      </Stack>
      <Button variant="contained" onClick={handleAdd}>
        Add Members
      </Button>
      {/* <Button variant="contained">
      <BasicModal />
      </Button> */}
      
      <Link className="btn btn-outline-primary mx-2" onClick ={handleOpen}>
          Change Plan
        </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <SpacingGrid />
        </Box>
      </Modal>
<div>
      
        <br />
        
      </div>

    </div>
  );
}

export default Profile;