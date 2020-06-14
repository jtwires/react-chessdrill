import { connect } from 'react-redux';

import Appbar from './view/appbar';

export default connect(
  (state, props) => {
    return {
      study: state.study
    };
  }
)(Appbar);
