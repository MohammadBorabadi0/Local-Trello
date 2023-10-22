import Image from "next/image";

const ImageComponent = () => {
  return (
    <>
      <Image
        src="/Pic1.png"
        alt="vector"
        width={400}
        height={500}
        className="hidden md:block w-1/5 object-cover bg-transparent fixed bottom-0 left-4"
      />
      <Image
        src="/Pic2.svg"
        alt="vector"
        width={400}
        height={500}
        className="hidden md:block w-1/5 object-cover bg-transparent fixed bottom-0 right-4"
      />
    </>
  );
};

export default ImageComponent;
