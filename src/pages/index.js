import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import FSAppBar from '../components/appbar';
import FSMenu from '../components/menu';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  state = {
    menuOpen: false
  };

  handleMenu(){
    this.setState({
      menuOpen: true,
    });
  }

  handleClose(){
    this.setState({
      menuOpen: false,
    });
  }

  render() {
    return (
      <div>
        <FSAppBar handleMenu={() => {this.handleMenu()}}  />
        <FSMenu menuOpen={this.state.menuOpen} handleClose={() => {this.handleClose()}} />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
