import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItems from './menuItems';

const styles = {
  list: {
    width: 'auto',
  },
};

class FSMenu extends React.Component {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;

    const menuItems = (
      <div className={classes.list}>
        <List>{ListItems}</List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.menuOpen} onClose={this.props.handleClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.handleClose}
            onKeyDown={this.props.handleClose}
          >
            {menuItems}
          </div>
        </Drawer>
      </div>
    );
  }
}

FSMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FSMenu);