import {handleActions} from 'redux-actions';
import {APP_ACTION_TYPES} from 'actions/appActions';

const INITIAL_STATE = {
  activeTab: null,
  isLoading: null,
  error: null
};

const handleClickedTab = (state, {payload}) => {
  window.scrollTo(0, 0);
  return {
    ...state,
    activeTab: payload ? payload : null,
    error: null
  }
};

export default handleActions({
  [APP_ACTION_TYPES.CLICKED_TAB]: handleClickedTab
}, INITIAL_STATE);