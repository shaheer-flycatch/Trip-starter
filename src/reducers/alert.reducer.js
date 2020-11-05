import {ALERT_ACTION_TYPE} from '../constants';

function alert(state = {}, action) {
  switch (action.type) {
    case ALERT_ACTION_TYPE.SUCCESS:
      return {
        type: 'success',
        message: action.message,
      };
    case ALERT_ACTION_TYPE.ERROR:
      return {
        type: 'error',
        message: action.message,
      };
    case ALERT_ACTION_TYPE.CLEAR:
      return {};
    default:
      return state;
  }
}

export default alert;
