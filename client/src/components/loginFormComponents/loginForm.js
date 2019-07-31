import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Field, reduxForm } from 'redux-form';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    label={label}
    name="UserName"
    autoComplete="email"
    autoFocus
    {...input}
    {...custom}
  />
);
const renderPasswordField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    label={label}
    type="password"
    {...input}
    {...custom}
  />
);

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Field name="UserName" component={renderTextField} label="User Name" />
        <Field name="Password" component={renderPasswordField} label="Password" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
export default reduxForm({
 form: 'loginForm'
})(LoginForm);
