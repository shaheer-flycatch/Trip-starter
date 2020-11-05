import { useEffect } from 'react';
import { message } from 'antd';
import { useSelector } from 'react-redux';

const ShowAlert = () => {
  const alert = useSelector((state) => state.alert);
  const success = () => {
    message.success(alert.message, 2);
  };
  const error = () => {
    message.error(alert.message, 2);
  };
  useEffect(() => {
    if (alert.type === "success") {
      success();
    } else if (alert.type === "error") {
      error();
    }
  }, [alert]);

  return null;
};

export default ShowAlert;
