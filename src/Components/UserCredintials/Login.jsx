import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../UserContext/AuthContext";
import './Style.css'


const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthProvider);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'


  const onSubmit = (data) => {
    console.log(data);
    logIn(data.name, data.email).then((result) => {
      const user = result.user;
      console.log(user);
      reset();
    });
  };
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const user = result.user;
      navigate(from , {replace : true});
    });
  };
  const handleGitLogIn = () => {
    githubLogin().then((result) => {
      const user = result.user;
      navigate(from , {replace : true});
    });
  };

  return (
    <div>
      {" "}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card  w-full shadow-2xl bg-base-100">
          <div className="my-5 flex justify-evenly">
              <div>
                <NavLink
                  to={"/login"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Log In
                </NavLink>
              </div>
              <div>
                {" "}
                <NavLink
                  to={"/signup"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                 Sign Up
                </NavLink>
              </div>
            </div>
            <hr />
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
            <hr />
            <div className="my-5">
              <button className="btn btn-primary" onClick={handleGoogleLogin}>
                {" "}
                Log In With Google
              </button>
              <button className="btn my-5" onClick={handleGitLogIn}>
                {" "}
                Log In With Github
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      This Is Log in Page
    </div>
  );
};

export default Login;
