"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ProviderButton from "@/components/ProviderButton";
import ImageComponent from "@/components/Image";
import Privacy from "@/components/Privacy";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex justify-center pt-14 h-screen w-screen bg-[#FAFBFC]">
      <ImageComponent />
      <div className="bg-white h-fit w-96 shadow-lg rounded-sm p-7">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <Image
            src="/trello-title.svg"
            alt="trello"
            width={100}
            height={150}
          />
          <span className="mt-10 font-semibold">Log in to continue</span>
          <div className="flex flex-col gap-4 mt-6 mb-3 w-[90%]">
            <Input type="email" placeholder="Enter your email" name='email' />
            <Input type="password" placeholder="Enter your password" name='password' />
            <Button>Continue</Button>
          </div>
          <ProviderButton />
          <span className="text-sm text-end text-blue-700 hover:underline cursor-pointer w-[90%] border-b border-slate-600 pb-8">
            Create an account
          </span>
          <Privacy />
        </form>
      </div>
    </section>
  );
};

export default Login;
