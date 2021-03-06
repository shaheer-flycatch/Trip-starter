import ACTION_TYPE from "../constants/tripManagement.constants";


const initialState = {
  trips: '',
};
const allTrips = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TRIP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPE.ADD_TRIP_SUCCESS:
      return {
        ...state,
        trips: action.tripData,
        isLoading: false,
      };
    case ACTION_TYPE.ADD_TRIP_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case ACTION_TYPE.GET_ALL_TRIP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPE.GET_ALL_TRIP_SUCCESS:
      return {
        ...state,
        trips: action.tripData,
        isLoading: false,
      };
    case ACTION_TYPE.GET_TRIP_BY_ID_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case ACTION_TYPE.UPDATE_TRIP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPE.UPDATE_TRIP_SUCCESS:
      return {
        ...state,
        trips: action.tripData,
        isLoading: false,
      };
    case ACTION_TYPE.UPDATE_TRIP_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case ACTION_TYPE.DELETE_TRIP_REQUEST:
      return {
        ...state,
        isLoading:true,
        deletingId: action.id,
      };
    case ACTION_TYPE.DELETE_TRIP_SUCCESS:
      return {
        ...state,
        trips: action.tripData,
        isLoading:false,

      };
    case ACTION_TYPE.DELETE_TRIP_FAILURE:
      return {
        ...state,
      };
  
    default:
      return state;
  }
};
export default allTrips;
