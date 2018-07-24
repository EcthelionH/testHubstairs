import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ComputerIcon from '@material-ui/icons/Computer';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: 500,
  },
};

class NavBar extends React.Component {Computer
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.root}
        >
            <Link to='/music'>
                <BottomNavigationAction label="Music" icon={<MusicNoteIcon />} />
            </Link>
            <Link to='/prime'>
                <BottomNavigationAction label="Prime" icon={<ComputerIcon />} />
            </Link>
            <Link to='/graph'>
                <BottomNavigationAction label="Graph" icon={<ShowChartIcon />} />
            </Link>
        </BottomNavigation>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);