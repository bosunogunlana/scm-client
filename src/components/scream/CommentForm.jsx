import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// Redux
import { connect } from 'react-redux';
import { submitComment } from '../../redux/actions/dataActions';

// MUI 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  ...theme.globalStyle
})

class CommentForm extends Component {

  state = {
    body: '',
    errors: {}
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors })
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitComment(this.props.screamId, { body: this.state.body });
  }

  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;

    const commantFormMarkup = authenticated ? ( 
      <Grid item sm={12} style={{ textAlign: 'center' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="body"
            type="text"
            label="Scream back to the screamer!"
            error={errors.comment ? true : false }
            required
            helperText={errors.comment}
            value={this.state.body}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <Button 
            type="submit" 
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
        <hr className={classes.visibleSep} />
      </Grid>
    ) : null
    return commantFormMarkup;
  }
}

CommentForm.propTypes ={
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated
})

export default connect(mapStateToProps, { submitComment})(withStyles(styles)(CommentForm))
