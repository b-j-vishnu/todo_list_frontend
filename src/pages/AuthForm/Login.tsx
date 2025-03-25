import React, { FormEvent, useState } from "react";
import Boy from "../../assets/images/boy.jfif";
import Input from "../../components/Input";
import { IAuth } from "../../types/Auth/SignupTypes";
import { verify } from "../../utils/Auth/VerifyValues";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store/store";
import { login } from "../../features/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<IAuth>();
  const initialState: IAuth = {
    username: "",
    password: "",
  };
  const [authData, setAuthData] = useState<IAuth>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const error = verify(authData, "login");
    const isError = Object.values(error).filter((err) => err != false);
    console.log(isError);
    if (isError.length > 0) {
      setErrors(error);
      return;
    } else {
      const response = await dispatch(login(authData)).unwrap();
      if (response.success) {
        navigate("home");
      }
    }
  };
  return (
    <section className="w-full h-screen grid  grid-cols-2 bg-gradient-to-br to-gray-300/70 from-orange-700 ">
      <div className=" grid place-items-center">
        <img src={Boy} className="w-1/2 rounded-4xl" />
      </div>
      <div className="grid place-items-center">
        <div className="bg-white w-3/5 px-5 py-4 rounded-lg flex flex-col ">
          <p className="py-1 px-2 cursor-pointer poppins-semibold text-2xl  text-center">
            Login
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex mt-7 relative flex-col  justify-center   "
          >
            <Input
              name="username"
              LabelFor="username"
              id="username"
              label="User Name"
              type="text"
              handleChange={handleChange}
              value={authData.username}
              key={1}
              errors={errors!}
            />
            <Input
              name="password"
              LabelFor="password"
              id="password"
              label="Password"
              type="password"
              handleChange={handleChange}
              value={authData.password}
              key={2}
              errors={errors!}
            />
            <div className=" flex mt-5 justify-end gap-x-2 items-center text-sm">
              <p>Don't have an account?</p>
              <Link
                to="/signup"
                className="text-blue-500 font-bold tracking-wide"
              >
                Signup
              </Link>
            </div>
            <button className="poppins-semibold text-white  my-5 w-full hover:cursor-pointer focus:oultine-none bg-orange-500 py-2 rounded-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
