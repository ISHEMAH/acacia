"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`rounded-full bg-blue-700 p-3 my-5 hover:bg-transparent ease-out duration-300 group hover:border-blue-700 hover:border-0  z-30 ${containerStyles}`}
      onClick={handleClick}
    >
      <span
        className={`flex-1 text-white font-regular  group-hover:text-blue-700 ${textStyles}`}
      >
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
