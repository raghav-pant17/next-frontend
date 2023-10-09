import * as React from "react";
import Grid from "@mui/material/Grid";
import OutlinedCard from "../components/Card";
import plandetails from "../components/plandetails";

export default function SpacingGrid(props) {
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
          {plandetails.getUpgrade(props.plan).map((value) => (
            <Grid key={value} item>
              <OutlinedCard
                planName={value.planname}
                planPrice={value.planprice}
                planDetails={value.plandetails}
                changePlan={props.changePlan}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
