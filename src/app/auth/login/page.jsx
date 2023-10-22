"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ProviderButton from "@/components/ProviderButton";
import ImageComponent from "@/components/Image";
import Privacy from "@/components/Privacy";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required !");
      return;
    }

    if (!password) {
      toast.error("Password is required !");
      return;
    }

    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      setEmail("");
      setPassword("");
      setLoading(false);
      toast.success("User Logged in successfully !");
      router.push("/");
    } else {
      toast.error(res.error);
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section className="flex justify-center pt-0 md:pt-14 min-h-screen w-screen bg-white md:bg-[#FAFBFC]">
      <ImageComponent />
      <div className="bg-white h-fit w-96 shadow-lg rounded-sm p-7">
        <div className="flex flex-col items-center">
          <Image
            src="/trello-title.svg"
            alt="trello"
            width={100}
            height={150}
          />
          <span className="mt-10 font-semibold">Log in to continue</span>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-6 mb-3 w-full md:w-[90%]"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              <Button>
                <ThreeDots
                  height={23}
                  radius="9"
                  color="#2563eb"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ margin: "auto" }}
                  visible={true}
                />
              </Button>
            ) : (
              <Button>Continue</Button>
            )}
          </form>
          <ProviderButton />
          <Link
            href="/auth/register"
            className="text-sm text-end text-blue-700 hover:underline cursor-pointer w-[90%] border-b border-slate-600 pb-8"
          >
            Create an account
          </Link>
          <Privacy />
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default Login;
