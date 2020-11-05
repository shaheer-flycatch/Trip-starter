import axios from 'axios';
import { BASE_URL } from '../config';
import {GLOBAL_CONSTANTS} from '../constants';

const handleResponse = (response) => {
    if(response.status===GLOBAL_CONSTANTS.ERROR){
     return Promise.reject(response.data);
    }
     return response.data;
  };

//get all trips

function tripList() {
    return axios
      .get(BASE_URL)
      .then((response) =>handleResponse(response))
      .catch((error) => handleResponse(error.response));
  }

  //delete trip
  function deleteTrip(id) {
    return axios
      .delete(`${BASE_URL}/${id}`)
      .then((response) => handleResponse(response))
      .catch((error) => handleResponse(error.response));
  }
  //update trip
  function updateTrip(updatedTripData) {
    return axios
      .put(`${BASE_URL}/${updatedTripData.id}`,updatedTripData)
      .then((response) => handleResponse(response))
      .catch((error) => handleResponse(error.response));
  }

  //create trip
  function createTrip(tripData) {
    return axios
      .post(BASE_URL,tripData)
      .then((response) => handleResponse(response))
      .catch((error) => handleResponse(error.response));
  }

  //get trip by id
  function getTripById(id) {
    return axios
      .get(`${BASE_URL}/${id}`)
      .then((response) => handleResponse(response))
      .catch((error) => handleResponse(error.response));
  }



  const tripService = {
  createTrip,
  tripList,
  deleteTrip,
  updateTrip,
  handleResponse,
  getTripById,
  }
  export default tripService;
  