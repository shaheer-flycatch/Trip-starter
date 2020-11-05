import React from "react";
import { Card, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { dateFormat } from "../helpers/dateFormat";
import GLOBAL_CONSTANTS from "../constants/globalConstants";
const TripCard = ({ trip, handleDelete, handleEdit }) => {

  return (
    <Card
      title={`Destination: ${trip.destination}`}
      style={{ width: 400, height: 245 }}
      bordered
      hoverable

      extra={
        <>
          {" "}
          <EditOutlined
            style={{ paddingRight: "10px" }}
            onClick={() => handleEdit(trip.id)}
          />
          <Popconfirm title={GLOBAL_CONSTANTS.ARE_YOU_SURE}
            onConfirm={() => handleDelete(trip.id)}
            okText={GLOBAL_CONSTANTS.YES}
            cancelText={GLOBAL_CONSTANTS.NO}><DeleteOutlined /></Popconfirm>
        </>
      }
    >
      <p>{GLOBAL_CONSTANTS.ID}{trip.id}</p>
    <p>{GLOBAL_CONSTANTS.START}{dateFormat(trip.start)}</p>
    <p>{GLOBAL_CONSTANTS.DURATION}{trip.duration}</p>
    <p>{GLOBAL_CONSTANTS.COMMENTS}{trip.comment}</p>
    </Card>
  );
};

export default TripCard;
