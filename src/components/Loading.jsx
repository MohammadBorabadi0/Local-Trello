import Image from "next/image";
import Layout from "./Layout/Layout";

const Loading = () => {
  return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Image src="/ball.svg" width={200} height={300} alt="loading" />
      </div>
  );
};

export default Loading;
