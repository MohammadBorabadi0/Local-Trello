"use client";

import Button from "@/components/Button";
import ImageComponent from "@/components/Image";
import Input from "@/components/Input";
import Privacy from "@/components/Privacy";
import ProviderButton from "@/components/ProviderButton";
import Image from "next/image";
import React, { useState } from "react";

const Register = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    if (!firstName) {
      setErrorMsg("First Name is required");
      return;
    }
    if (!lastName.trim()) {
      setErrorMsg("Last Name is required");
      return;
    }
    if (!email.trim()) {
      setErrorMsg("Email is required");
      return;
    }
    if (!password.trim()) {
      setErrorMsg("Password is required");
      return;
    }
    console.log(formData);
  };

  return (
    <section className="flex justify-center pt-2 h-screen w-screen bg-[#FAFBFC]">
      <ImageComponent />
      <div className="bg-white h-fit w-96 shadow-lg rounded-sm p-7">
        <div className="flex flex-col items-center">
          <Image
            src="/trello-title.svg"
            alt="trello"
            width={100}
            height={120}
          />
          <span className="mt-6 font-semibold">Sign up to continue</span>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 my-4 w-[90%] text-sm"
          >
            <Input
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              isError={isError}
              errorMsg={errorMsg}
            />
            <Input
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isError={isError}
              errorMsg={errorMsg}
            />
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isError={isError}
              errorMsg={errorMsg}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isError={isError}
              errorMsg={errorMsg}
            />
            <Button>Sign up</Button>
          </form>
          <ProviderButton />
          <span className="text-center text-sm text-blue-700 hover:underline cursor-pointer w-[90%] border-b border-slate-600 pb-6">
            Already have an Atlassian account? Log in
          </span>
          <Privacy />
        </div>
      </div>
    </section>
  );
};

export default Register;
