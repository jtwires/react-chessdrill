import React from 'react';
import PropTypes from 'prop-types';

import MaterialDrawer from '@material-ui/core/Drawer';

const Drawer = ({ studies, open, onClose }) => {
  return (
      <MaterialDrawer
        anchor="left"
        open={open}
        onClose={onClose}>

          {studies.map(study => <p key={study}>{study}</p>)}

      </MaterialDrawer>
  );
};

Drawer.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Drawer;
