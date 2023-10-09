import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: 5,
  opacity: "0.94",
};

function SilverPlan() {
  return (
    <Container maxWidth="sm" sx={style}>
      <Card variant="outlined" sx={style}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Silver Package
          </Typography>

          <Typography variant="body1" gutterBottom>
            Included Features:
          </Typography>

          <ul>
            <li>Amazon Prime Video Content</li>

            <li>Hotstar Free Content</li>

            <li>1080p Resolution</li>

            <li>Minimal Ads</li>

            <li>Dolby Audio Supported</li>
          </ul>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Price: ₹ 199 /-
          </Typography>

          <Link to="/login">
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, width: "100%" }}
            >
              Buy Now
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SilverPlan;
