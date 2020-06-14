import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import uiReducer from './ui';
import lineReducer from './line';
import studyReducer from './study';

import state from './state';
import { setStudy } from './ui';
import { addLine } from './line';
import { addStudy } from './study';

const store = configureStore({
  reducer: combineReducers({
    ui: uiReducer,
    lines: lineReducer,
    studies: studyReducer
  })
});

state.lines.forEach(line => store.dispatch(addLine(line)));
state.studies.forEach(study => store.dispatch(addStudy(study)));
store.dispatch(setStudy(0));

export default store;
