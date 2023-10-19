"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

const SigninButton = () => {
  const session = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (session && session.status === "authenticated") {
    return (
      <section>
        <img
          src={session.data.user.image}
          alt={session.data.user.name}
          width={30}
          height={40}
        />
        <p>{session.data.user.name}</p>
        <p>{session.data.user.email}</p>

        <button
          onClick={() => signOut()}
          className="bg-red-600 text-white px-2 py-1"
        >
          Sign Out
        </button>
      </section>
    );
  }

  if (session && session.status === "unauthenticated") {
    return (
      <div className="flex flex-col gap-3">
        <button
          className="px-2 py-1 rounded-md bg-yellow-600 text-white"
          onClick={async () => signIn("google")}
        >
          Sign In With Google
        </button>
        <button
          className="px-2 py-1 rounded-md bg-purple-600 text-white"
          onClick={async () => signIn("github")}
        >
          Sign In With Github
        </button>
      </div>
    );
  }
};

export default SigninButton;
