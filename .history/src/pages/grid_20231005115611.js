import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import OutlinedCard from '../components/Card';
import plandetails from '../components/plandetails';

const plan = plandetails.getUpgrade('Silver');
// console.log("Ayush")
console.log(plan);

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {
            plan.map((value) => (
    
            <Grid key={value} item>
        
              <OutlinedCard planName ={value.planname} planPrice = {value.planprice} planDetails={value.plandetails} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}