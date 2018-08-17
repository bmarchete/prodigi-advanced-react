import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItems from "./MenuItems";

const styles = {
  list: {
    width: 250
  }
};

const SideMenu = props => {
  const { classes } = props;

  const toggleDrawer = value => () => {
    props.toggle(value);
  };

  const sideList = (
    <div className={classes.list}>
      <MenuItems />
    </div>
  );

  return (
    <Drawer open={props.open} onClose={toggleDrawer(false)}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {sideList}
      </div>
    </Drawer>
  );
};

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideMenu);
