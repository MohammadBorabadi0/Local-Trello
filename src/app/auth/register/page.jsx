"use client";

import Button from "@/components/Button";
import ImageComponent from "@/components/Image";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import Privacy from "@/components/Privacy";
import ProviderButton from "@/components/ProviderButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    if (!email) {
      toast.error("Email is required !");
      return;
    }

    if (!password) {
      toast.error("Password is required !");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      setLoading(false);
      setEmail("");
      setPassword("");
      router.push("/auth/login");
    } else {
      setLoading(false);
      toast.error(data.message);
    }
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section className="flex justify-center pt-0 md:pt-16 h-screen w-screen bg-white md:bg-[#FAFBFC]">
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
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 my-4 w-full md:w-[90%]"
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
              <Button>Sign up</Button>
            )}
          </form>
          <ProviderButton />
          <Link
            href="/auth/login"
            className="text-center text-sm text-blue-700 hover:underline cursor-pointer w-[90%] border-b border-slate-600 pb-6"
          >
            Already have an Atlassian account? Log in
          </Link>
          <Privacy />
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default Register;
