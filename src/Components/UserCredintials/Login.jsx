import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../UserContext/AuthContext";

const Login = () => {
  const { logIn } = useContext(AuthProvider);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    logIn(data.name, data.email)
    .then(result => {
        const user = result.user;
        console.log(user);
        
    })
  };

  return (
    <div>
      {" "}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card  w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jhon@cena.com"
                  className="input input-bordered"
                  {...register("email", {
                    // required: "Please Enter Your Email Adress",
                  })}
                />
                <p className="text-red-500 p-2">
                  {errors?.email && errors.email.message}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  //   {...register("password",{required : "You Can't Register Without Keys"})}
                />
                <p className="text-red-500 p-2">
                  {errors?.password && errors.password.message}
                </p>
              </div>

              <div className="form-control mt-6">
                <input type={"submit"} className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
      This Is Log in Page
    </div>
  );
};

export default Login;
