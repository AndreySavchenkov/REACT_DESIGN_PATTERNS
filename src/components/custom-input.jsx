import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export const CustomInput = (props, ref) => {
  const [value, setValue] = useState();

  useImperativeHandle(
    ref,
    () => {
      return { value };
    },
    [value]
  );

  return (
    <input
      {...props}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Input = forwardRef(CustomInput);
