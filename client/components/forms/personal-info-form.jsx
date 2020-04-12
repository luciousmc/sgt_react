import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '80%',
    padding: 15
  }
});

const PersonalInfoForm = ({
  changeFunc,
  firstNameVal,
  middleInitialVal,
  lastNameVal,
  ssnVal,
  birthDateVal,
  phoneVal,
  emailVal,
  addressVal,
  cityVal,
  stateVal,
  zipCodeVal
}) => {
  const classes = useStyles();
   
  return(
    <form className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5' align='center'>
            Your Personal Details
          </Typography>
          <Typography variant='subtitle1' align='center' gutterBottom>
            Please fill in your information then click &quot;Next&quot; to move on.<br/>
            <strong>Note:</strong> * is required.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={5}>
          <TextField
            required
            name='firstName'
            label='First Name'
            id='firstName'
            onChange={changeFunc}
            value={firstNameVal}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            name='middleInitial'
            label='M.I.'
            id='middleInitial'
            onChange={changeFunc}
            value={middleInitialVal}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            name='lastName'
            label='Last Name'
            id='lastName'
            onChange={changeFunc}
            value={lastNameVal}
            fullWidth
          />
        </Grid>
        
        <Grid item xs={6}>
          <TextField
            required
            name='birthDate'
            type='date'
            InputLabelProps={{ shrink: true }}
            label='Birth Date'
            id='birthDate'
            onChange={changeFunc}
            value={birthDateVal}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            name='ssn'
            label='Social Security #'
            id='ssn'
            onChange={changeFunc}
            value={ssnVal}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            name='email'
            label='Email'
            id='email'
            onChange={changeFunc}
            value={emailVal}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            name='phone'
            label='Tel #'
            id='phone'
            onChange={changeFunc}
            value={phoneVal}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            name='address'
            label='Address'
            id='address'
            onChange={changeFunc}
            value={addressVal}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            name='city'
            label='City'
            id='city'
            onChange={changeFunc}
            value={cityVal}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            name='state'
            label='State'
            id='state'
            onChange={changeFunc}
            value={stateVal}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            name='zipCode'
            label='Zip Code'
            id='zipCode'
            onChange={changeFunc}
            value={zipCodeVal}
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
};

PersonalInfoForm.propTypes = {
  firstNameVal: PropTypes.string.isRequired,
  middleInitialVal: PropTypes.string,
  lastNameVal: PropTypes.string.isRequired,
  ssnVal: PropTypes.string.isRequired,
  birthDateVal: PropTypes.string.isRequired,
  phoneVal: PropTypes.string.isRequired,
  emailVal: PropTypes.string.isRequired,
  addressVal: PropTypes.string.isRequired,
  cityVal: PropTypes.string.isRequired,
  stateVal: PropTypes.string.isRequired,
  zipCodeVal: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired
}

export default PersonalInfoForm;