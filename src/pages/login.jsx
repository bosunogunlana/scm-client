import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core';
import AppIcon from '../images/icon.png';
import Axios from 'axios';

const styles = (theme) => ({
  ...theme.globalStyle
});

class Login extends Component {

  state = {
    email: '',
    password: "",
    loading: false,
    errors: {

    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
      errors: {}
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    Axios.post('/login', userData)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        })
      })
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm > 
          <Card className={classes.card}>
            <CardContent>
              <img src={AppIcon} alt="Login Logo" className={classes.image} />
              <Typography variant="h4" className={classes.pageTitle} >
                Login
              </Typography>
              <form noValidate onSubmit={this.handleSubmit} >
                <TextField 
                  id="email" 
                  name="email" 
                  type="email" 
                  label="Email" 
                  className={classes.textField}
                  helperText={errors.email}
                  error={errors.email ? true : false}
                  value={this.state.email}
                  onChange={this.handleChange}
                  autoComplete="none"
                  autoFocus={true}
                  fullWidth
                />
                <TextField 
                  id="password" 
                  name="password"
                  type="password" 
                  label="Password" 
                  className={classes.textField}
                  helperText={errors.password}
                  error={errors.password ? true : false}
                  value={this.state.password}
                  onChange={this.handleChange}
                  fullWidth
                />
                { errors.general && (
                  <Typography variant="body2" className={classes.customError}>
                    {errors.general}
                  </Typography>
                )}
                <Button 
                  type="submit" 
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={loading}
                >
                  Login
                  { loading && (
                    <CircularProgress size={20} className={classes.progress} />
                  )}
                </Button>
                <br />
                <small>don't have an account ? Click <Link to='/signup' > here </Link> to create an account</small>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login);

