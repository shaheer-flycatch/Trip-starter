import React from "react";
import { DatePicker, Modal } from "antd";
import { Form, Input, Button } from "antd";
import { formItemLayout, submitButtonLayout } from "../constants/formConstants";

const TripForm = ({ handleCancel, tripData, onFinish, isEdit, title }) => {
  return (
    <Modal
      title={title}
      visible={true}
      onCancel={handleCancel}
      footer={false}
    >
      <Form {...formItemLayout} onFinish={onFinish}>
        {isEdit && <Form.Item name="id" initialValue={tripData.id} hidden />}
        <Form.Item
          name="destination"
          label="Destination"
          rules={[{ required: true }]}
          initialValue={tripData.destination}
        >
          <Input placeholder="Enter destination" />
        </Form.Item>
        {isEdit ? (
          <Form.Item name="start" initialValue={tripData.start} hidden />
        ) : (
            <Form.Item name="start" label="Start" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          )}

        {isEdit ? (
          <Form.Item name="duration" initialValue={tripData.duration} hidden />
        ) : (
            <Form.Item
              name="duration"
              label="Duration"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter duration" />
            </Form.Item>
          )}
        <Form.Item
          name="comment"
          label="comment"
          rules={[{ required: true }]}
          initialValue={tripData.comment}
        >
          <Input placeholder="Enter  comment " />
        </Form.Item>

        {isEdit ? (
          <Form.Item name="color" initialValue={tripData.color} hidden />
        ) : (
            <Form.Item name="color" label="Color" rules={[{ required: true }]}>
              <Input placeholder="Enter color code" />
            </Form.Item>
          )}
        <Form.Item {...submitButtonLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TripForm;
