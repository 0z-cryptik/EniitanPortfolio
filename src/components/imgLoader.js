import { ClipLoader } from "react-spinners";
import { useList } from "./stateProvider";

export const ImgLoader = () => {
    const { dark } = useList();

    return (
        <div className="w-[100%] h-[300px] flex justify-center items-center">
            <ClipLoader color={`${dark ? "white" : "black"}`} />
        </div>
    );
};

export const AvatarLoader = () => {
    return (
        <div className="flex justify-center items-center w-full h-[8rem] -mt-[3.5rem]">
            <span className="h-full w-[128px] border bg-gray-300 rounded-full flex justify-center items-center">
                <ClipLoader color="black" />
            </span>
        </div>
    );
};
