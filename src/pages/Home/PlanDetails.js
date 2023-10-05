import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';

const PlanDetails = ({ match }) => {
    const { params } = match;
    const plan = plans.find((p) => p.id === params.planId);
  
    return (
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {plan.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {plan.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  };
  
  export default PlanDetails;