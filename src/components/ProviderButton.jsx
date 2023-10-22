import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProviderButton = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, data, status]);

  
  return (
    <>
      <span className="text-xs text-gray-400 my-3">OR</span>
      <div className="flex flex-col gap-3 w-full md:w-[90%] mb-4">
        <Button onClick={() => signIn("google")}>
          <FcGoogle size={20} className="absolute left-2" />
          <span>Continue with Google</span>
        </Button>
        <Button onClick={() => signIn("github")}>
          <BsGithub size={20} className="absolute left-2" />
          <span>Continue with Github</span>
        </Button>
      </div>
    </>
  );
};

export default ProviderButton;
