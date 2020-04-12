import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfoContainer from './personal-info-container';


const getSteps = () => {
  return [
    'Personal Information',
    'Work Information',
    'Certifications',
    'Review and Submit'
  ];
}

const getStepContent = stepId => {
  switch(stepId) {
    case 0:
      return <PersonalInfoContainer />
    case 1:
      return <WorkInfoContainer />
    case 2:
      return <CertificationContainer />
    case 3:
      return <ReviewContainer />
    default:
      return <h1>Invalid Step</h1>
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const RegistrationStepper = () => {
  const classes = useStyles();
  const [ activeStep, setActiveStep ] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationStepper;