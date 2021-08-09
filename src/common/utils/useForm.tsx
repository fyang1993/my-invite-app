import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [showPendingButton, setShowPendingButton] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // const openNotificationWithIcon = () => {
  //   notification["success"]({
  //     message: "Success",
  //     description: "Your message has been sent!",
  //   });
  // };

  // const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(event);
  //   setErrors(validate(values));
  //   console.log('before submit',errors);
  //   // Your url for API
  //   const url = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
  //   if (Object.keys(values).length === 3){
  //     console.log('show pending button');
  //     setShowPendingButton(true);
  //     axios
  //       .post(url, {
  //         ...values,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         setShowPendingButton(false);
  //         console.log('show success !');
  //         setShowSuccessModal(true);
  //         // setShouldSubmit(true);
  //       })
  //       .catch((err) =>{
  //         console.log(err);
  //       });
  //   }
  // };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      // setValues("");
      // openNotificationWithIcon();
    }
  }, [errors]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    console.log("values",values);
    console.log("errors",errors);
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    // setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
    setErrors(validate(values));
  };
  

  return {
    handleChange,
    values,
    errors,
    showPendingButton,
    showSuccessModal,
    setValues
  };
};
