import React from "react";
import { Paper, Typography, Box, Button, Container } from "@mui/material";

function DataBox({ data }) {
  const { first_name, last_name, dob, gender, id_type, id_number } = data;
  const maskIdCard = (idcard) => {
    if (idcard.length > 4) {
      const maskedPart = "*".repeat(idcard.length - 4);

      const lastDigits = idcard.slice(-4);

      return maskedPart + lastDigits;
    } else {
      return idcard;
    }
  };
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 8 }}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1">
            <strong>Name:</strong> {first_name + " " + last_name}
          </Typography>
          <Typography variant="body1">
            <strong>Date of Birth:</strong> {dob}
          </Typography>
          <Typography variant="body1">
            <strong>Gender:</strong> {gender}
          </Typography>
          <Typography variant="body1">
            <strong>ID Type:</strong> {id_type}
          </Typography>
          <Typography variant="body1">
            <strong>ID Number:</strong> {maskIdCard(id_number)}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default DataBox;
