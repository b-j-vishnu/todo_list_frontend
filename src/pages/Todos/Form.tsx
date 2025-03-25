import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./FormInput";

export interface IInputs {
  name: string;
}
const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="name"
          register={register}
          required
          message={errors.name?.message!}
        />
        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default Form;
