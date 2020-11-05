import ACTION_TYPE from "../constants/tripManagement.constants";
import tripService from "../services/tripService";
import { history } from "../helpers/history";
import alertActions from "./alert.actions";

const createTrip = (tripData) => {
  function request() {
    return { type: ACTION_TYPE.ADD_TRIP_REQUEST };
  }
  function success(tripData) {
    return { type: ACTION_TYPE.ADD_TRIP_SUCCESS, tripData };
  }
  function failure(error) {
    return { type: ACTION_TYPE.ADD_TRIP_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request(tripData));
    tripService.createTrip(tripData).then(
      () => {
        tripService.tripList().then(
          (tripData) => {
            dispatch(success(tripData));
            dispatch(alertActions.success("Trip successfully created"));
          },
          (error) => {
            dispatch(failure(error.toString()));
          }
        );
      },
      (error) => {
        dispatch(alertActions.error("something went wrong"));
      }
    );
  };
};
function deleteTrip(tripId) {
  function request(id) {
    return { type: ACTION_TYPE.DELETE_TRIP_REQUEST, id };
  }
  function success(tripData) {
    return { type: ACTION_TYPE.DELETE_TRIP_SUCCESS, tripData };
  }
  function failure(error) {
    return { type: ACTION_TYPE.DELETE_TRIP_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request(tripId));
    tripService.deleteTrip(tripId).then(
      () => {
        tripService.tripList().then(
          (tripData) => {
            dispatch(success(tripData));
            dispatch(alertActions.success("Trip deleted"));
          },
          (error) => {
            dispatch(failure(error.toString()));
          }
        );
      },
      (error) => {
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

const updateTrip = (updatedTripData) => {
  function request() {
    return { type: ACTION_TYPE.UPDATE_TRIP_REQUEST };
  }
  function success(tripData) {
    return { type: ACTION_TYPE.UPDATE_TRIP_SUCCESS, tripData };
  }
  function failure(error) {
    return { type: ACTION_TYPE.UPDATE_TRIP_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request());
    tripService.updateTrip(updatedTripData).then(
      (data) => {
        tripService.tripList().then(
          (tripData) => {
            dispatch(success(tripData));
            dispatch(alertActions.success("Trip successfully updated"));
            history.push("/");
          },
          (error) => {
            dispatch(failure(error.message));
          }
        );
      },
      (error) => {
        dispatch(failure(error.message));
        dispatch(alertActions.error("something went wrong"));
      }
    );
  };
};

const tripActions = {
  tripList,
  deleteTrip,
  updateTrip,
  createTrip,
};
export default tripActions;
