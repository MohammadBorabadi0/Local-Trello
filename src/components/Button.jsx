import React from "react";

const Button = ({ children,onClick }) => {
  return (
    <button
      className={`shadow-small relative flex items-center justify-center rounded-sm py-2 font-semibold ${
        children === "Continue" && "bg-blue-600 text-white"
      } ${children === "Sign up" && "bg-blue-600 text-white"}`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
