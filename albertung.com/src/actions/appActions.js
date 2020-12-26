import createConstants from 'namespace-constants';
import {createAction} from 'redux-actions';

export const APP_ACTION_TYPES = createConstants('app', [
  'CLICKED_TAB'
]);

export const clickedTab = createAction(APP_ACTION_TYPES.CLICKED_TAB)

export default {
  clickedTab
};