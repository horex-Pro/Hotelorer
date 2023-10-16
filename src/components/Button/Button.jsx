import React from "react";

function Button({ text, bgColor, color, border, font }) {
  return (
    <a
      href="#"
      className={`bg-${bgColor}
              text-${color}
              text-[14px]
              font-${font}
              flex
              border
              border-${border}
              rounded-[28px] w-[80px]
              items-center
              justify-center
              h-[30px]
              `}
    >
      {text}
    </a>
  );
}

export default Button;
