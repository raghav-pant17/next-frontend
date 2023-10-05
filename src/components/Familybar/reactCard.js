import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { fontGrid } from '@mui/material/styles/cssUtils';

export default function reactCards(props) {
    // console.log(props);
  return (
    <Stack direction="row" spacing={2}>
        <div>
      <Avatar sx={{ bgcolor: 'primary.main', width: 90, height: 90, margin: 6 , marginBottom: 0, marginTop: 0}} variant="circle">
        <PersonOutlineIcon fontSize="large"/>
      </Avatar>
      <p>{props.first_name}</p>
      </div>
      <br />
    </Stack>
  );
}
