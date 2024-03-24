import { HiOutlineLocationMarker } from "react-icons/hi";

export const Details = () => {
  return (
    <>
      <p
        id="top"
        className="w-fit mx-auto font-bold text-xl">
        Enitan Akinfenwa
      </p>
      <p className="w-fit mx-auto text-sm">Frontend Software Developer</p>
      <p className="w-fit mx-auto text-gray-500">
        <HiOutlineLocationMarker className="inline -mt-1" />
        Nigeria
      </p>
    </>
  );
};
