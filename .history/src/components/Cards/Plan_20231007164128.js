import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import {useState, useEffect } from 'react'
import axios from 'axios';

import { Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';

const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'rgb(0,0,0,0.75)',
  color: 'white',
  // boxShadow: 24,
  p: 4,
  // borderRadius: 5,
};

function Plan() {
  let { id } = useParams(); 
  const [plan, setPlan] = useState({includeItems: []});

  useEffect(()=>{
    const result = axios.get(`http://localhost:8080/api/customer/PlanById/${id}`).then((result) => {
      setPlan(result.data);
      console.log(result.data)
    })},{})
       
    const listItems = plan.includeItems.map((item) =>
  <li>{item.info}</li>
);
  return (

    <Container maxWidth="sm" sx={style}>

      <Card variant="outlined" sx={style}>

        <CardContent>

          <Typography variant="h3" color= "white" gutterBottom>

            {(plan.name)} Package

          </Typography>

          <Typography variant="body1" gutterBottom>

            Included Features:

          </Typography>
          <ul>
             {/* {plan.includeItems.map((item) =>{
              <li>{item.info}</li> 
          })} */} {listItems}
          </ul>
          <Typography variant="h6" sx={{ mt: 2 }}>

            Price: ₹ {plan.price} /-

          </Typography>
          <Link to="/platinum/create-user/Platinum">
          <Button variant="contained" color="primary" sx={{ mt: 3, width: '100%' }}>

            Buy Now

          </Button>
          </Link>
        </CardContent>

      </Card>

    </Container>

  );

}

 

export default Plan;