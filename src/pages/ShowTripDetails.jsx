import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import '../css/showTripDetails.css';
import tripActions from "../actions/tripManagement.action";
import TripCard from "../components/TripCard";
import TripForm from "../components/TripForm";
import { dateFormat } from "../helpers/dateFormat";
import MyLoader from "../components/MyLoader";
import ShowAlert from "../components/ShowAlert";
import GLOBAL_CONSTANTS from "../constants/globalConstants";
const ShowTripDetails = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [tripData, setTripData] = useState({
    id: "",
    destination: "",
    comment: "",
  });
  useEffect(() => {
    dispatch(tripActions.tripList());
  }, []);
  const handleDelete = (id) => {
    dispatch(tripActions.deleteTrip(id));
  };
  const allTrips = useSelector((state) => state.allTrips);
  const { trips ,isLoading} = allTrips;
  const handleCancel = () => {
    setVisible(false);
    setCreateFormVisible(false);
  };
  const handleEdit = (trip) => {
    setVisible(true);
    setTripData({
      id: trip.id,
      destination: trip.destination,
      comment: trip.comment,
      start: trip.start,
      color: trip.color,
      duration: trip.duration,
    });
  };

  const onFinish = (fieldsValue) => {
    dispatch(tripActions.updateTrip(fieldsValue));
    handleCancel();
  };
  const onCreateTrip = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      start: dateFormat(fieldsValue.start),
    };
     dispatch(tripActions.createTrip(values));
     handleCancel();
  
  };
  return (
    <div>
      <ShowAlert/>
      {visible && (
        <TripForm
          tripData={tripData}
          handleCancel={handleCancel}
          onFinish={onFinish}
          title={GLOBAL_CONSTANTS.EDIT_TRIP_DATA}
          isEdit
        />
      )}
      {createFormVisible && (
        <TripForm
          onFinish={onCreateTrip}
          handleCancel={handleCancel}
          title={GLOBAL_CONSTANTS.CREATE_TRIP}
          tripData
        />
      )}
      <Row className="header"
      >
        <Col offset={11} >
          {GLOBAL_CONSTANTS.HEADING}
        </Col>
      </Row>
      <Row style={{ padding: "15px" }}>
        <Col offset={23}>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size={3}
            onClick={() => setCreateFormVisible(true)}
          />
        </Col>
      </Row>
      {trips &&
        trips.map((trip, index) => {
          return (
            <Row style={{ paddingTop: "25px" }} key={index}>
              <Col span={9} offset={3}>
            {isLoading?<MyLoader/> :   <TripCard
                
                  trip={trip}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />}
              </Col>
              <Col span={9} offset={3}>
             {isLoading?<MyLoader/>:<InfiniteCalendar
                  width={400}
                  height={100}
                  selected={trip.start}
                  theme={{ headerColor: trip.color }}
                />}   
              </Col>
            </Row>
          );
        })}
    </div>
  );
};

export default ShowTripDetails;
