/**
 * Input empty error
 * @param {*} e 
 */

import { toast } from "react-toastify";

export const emptyFieldError = (e) => {
    if (e.target.value == "") {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "#38508560";
    }
  };


  // phone number validation
export const isPhone = (mobile) => {
  const phoneRegex = /^(\+?880|0)1[1-9]\d{8}$/;
  return phoneRegex.test(mobile);
};

// email validation
export const isEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};



// toster  ---
export const createToast = (msg, type = "error") => {
  return toast[type](msg);
};