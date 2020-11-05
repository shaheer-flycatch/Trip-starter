import {ACTION_TYPE} from "../constants/tripManagement.constants";
import tripService from "../services/tripService";
import {alertActions} from "./alert.actions";

//create new trip

const createTrip = (tripData) => {
  function request() {
    return { type: ACTION_TYPE.ADD_TRIP_REQUEST };
  }
   return (dispatch) => {
    dispatch(request(tripData));
    tripService.createTrip(tripData).then(
      () => {
        dispatch(tripList());
       dispatch(alertActions.success("Trip successfully added")) 
      },
      () => {
        dispatch(alertActions.error("something went wrong"));
      }
    );
  };
 
};

//delete trip

function deleteTrip(tripId) {
  function request(id) {
    return { type: ACTION_TYPE.DELETE_TRIP_REQUEST, id };
  }

  return (dispatch) => {
    dispatch(request(tripId));
    tripService.deleteTrip(tripId).then(
      () => {
        dispatch(tripList());
       dispatch(alertActions.success("Trip successfully deleted")) 
      },
      () => {
        dispatch(alertActions.error("something went wrong"));
      }
    );
  };
}

// get all trip details
const tripList = () => {
  function request() {
    return { type: ACTION_TYPE.GET_ALL_TRIP_REQUEST };
  }
  function success(tripData) {
    return { type: ACTION_TYPE.GET_ALL_TRIP_SUCCESS, tripData };
  }
  function failure(error) {
    return { type: ACTION_TYPE.GET_ALL_TRIP_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request());
    tripService.tripList().then(
      (tripData) => {
        dispatch(success(tripData));
      },
      (error) => {
        dispatch(failure(error.message));
      }
    );
  };
};
//update trip
const updateTrip = (updatedTripData) => {
  function request() {
    return { type: ACTION_TYPE.UPDATE_TRIP_REQUEST };
  }

  return (dispatch) => {
    dispatch(request());
    tripService.updateTrip(updatedTripData).then(
      () => {
        dispatch(tripList());
       dispatch(alertActions.success("Trip successfully updated")) 
      },
      () => {
        dispatch(alertActions.error("something went wrong"));
      }
    );
  };
};
// get trip by id
function getTripById(tripId) {
  function request() {
    return { type: ACTION_TYPE.GET_TRIP_BY_ID_REQUEST };
  }
  function success(trip) {
    return { type: ACTION_TYPE.GET_TRIP_BY_ID_SUCCESS, trip };
  }
  function failure(error) {
    return { type: ACTION_TYPE.GET_TRIP_BY_ID_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request(tripId));
    tripService.getTripById(tripId).then(
      (trip) => {
        dispatch(success(trip));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };
}

const tripActions = {
  tripList,
  deleteTrip,
  updateTrip,
  createTrip,
  getTripById,
};
export {tripActions} ;
