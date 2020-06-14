import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '../../menu/drawer';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Appbar = ({ study }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={() => setDrawerOpen(true)}
          edge="start"
          color="inherit"
          aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <Typography variant="h6" className={classes.title}>
          {study}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Appbar.propTypes = {
  study: PropTypes.string.isRequired
};

Appbar.defaultProps = {
  study: 'choose a study'
};

export default Appbar;
