import React from "react";
import { IInputs } from "./Form";
import { UseFormRegister, Path, FieldError } from "react-hook-form";

interface IFormInputProps {
  label: Path<IInputs>;
  required: boolean;
  register: UseFormRegister<IInputs>;
  message: string;
}

const FormInput = ({ label, required, register, message }: IFormInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input {...register(label, { required: `${label} is required` })} />
      <p>{message}</p>
    </div>
  );
};

export default FormInput;
