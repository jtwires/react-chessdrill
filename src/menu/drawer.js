import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { bindActionCreators } from 'redux';

import { setStudy } from '../study';

import Drawer from './view/drawer';

const selectStudies = state => state.studies;
const selectStudyNames = createSelector(
  [selectStudies],
  (studies) => {
    return studies.map(study => study.name);
  }
);

export default connect(
  (state, props) => {
    return {
      open: props.open,
      onClose: props.onClose,
      studies: selectStudyNames(state)
    };
  },
  dispatch => {
    return bindActionCreators(
      {
        setStudy
      },
      dispatch
    );
  }
)(Drawer);
