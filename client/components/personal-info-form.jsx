import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const PersonalInfoForm = () => {
  return(
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h4' gutterBottom>
          Your Personal Details
        </Typography>
        <Typography variant='subtitle1'>
          Please fill in every field then click &quot;Next&quot; to move on
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PersonalInfoForm;