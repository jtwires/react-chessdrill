import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './home/appbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
    </div>
  );
};

export default App;
