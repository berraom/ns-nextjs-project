
import { InputBase, InputField, InputLabel } from "./_style";
import { IInput } from "./_type";
import { forwardRef } from "react";


export const Input = forwardRef<HTMLInputElement, IInput>(({ label, ...props }, ref) => {
  return (
    <InputBase>
      {label && <InputLabel>{label}</InputLabel>}
      <InputField ref={ref} {...props} />
    </InputBase>
  );
});

Input.displayName = "Input"; 
