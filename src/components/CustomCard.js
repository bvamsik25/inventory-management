import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function CustomCard({cardIcon, cardHeading, cardContent}){
  return(
    <Card sx={{ 
      minWidth: 350,
      minHeight: 130,
      borderRadius: 3,
      backgroundColor: '#233325'
    }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {cardIcon}
          </Grid>
          <Grid item xs={8}>
            <Box> {cardHeading} </Box>
            <Box> {cardContent} </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}