import React, { useState } from 'react';
import {Typography, Button, Stack } from '@mui/material';
import DataBox from './DataBox';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Profile() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [boxes, setBoxes] = useState(data);
  const navigate = useNavigate();

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
        Add Family
      </Button>
      <Button variant="contained">
        Add Family
      </Button>
    </div>
  );
}

export default Profile;