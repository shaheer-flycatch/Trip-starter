import {ALERT_ACTION_TYPE}   from '../constants/alert.constants';

function success(message) {
  return { type: ALERT_ACTION_TYPE.SUCCESS, message };
}
function error(message) {
  return { type: ALERT_ACTION_TYPE.ERROR, message };
}
function clear() {
  return { type: ALERT_ACTION_TYPE.CLEAR };
}

const alertActions = {
  success,
  error,
  clear,
};

export {alertActions} ;
