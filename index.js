import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { setUI } from 'Actions/UiActions';
import colors from 'API/ui';
import styles from './welcome-jss.js';

class Welcome extends Component {
  toggleColor = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.props.setUI({ color });
  }

  render() {
    const { classes, color } = this.props;

    return (
      <Fragment>


      </Fragment>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  setUI: PropTypes.func.isRequired
};

const reducer = 'ui';

const mapStateToProps = state => ({
  color: state.getIn([reducer, 'color'])
});

const mapDispatchToProps = dispatch => ({
  setUI: bindActionCreators(setUI, dispatch)
});

const WelcomeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

export default withStyles(styles)(WelcomeMapped);
