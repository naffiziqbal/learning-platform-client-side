import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthProvider } from "../../UserContext/AuthContext";
import "./Style.css";

const Signup = () => {
  const { createUser, handleUpdateProfile, googleLogin, githubLogin } =
    useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // const imgHostKey = process.env.IMG_BB_HOST_KEY
  // console.log(imgHostKey);
  const url = `https://api.imgbb.com/1/upload?key=c4fb97e7290fa8d31a86af5335890d26`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.email, data.password, 'password', data.name);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // console.log(formData);

    createUser(data.email, data.name, data.password)
      .then((result) => {
        const user = result.user;
        Swal.fire("Good job!", "Log In Success", "success");
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            if (imgData.success) {
              updateProfile(data.name, imgData.data.url);
              Swal.fire("Good job!", "Sign Up Success", "success");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err,
          text: err.message,
        });
      });
  };
  //Handle User Info
  const updateProfile = (displayName, photoURL) => {
    const profile = {
      displayName,
      photoURL,
    };
    handleUpdateProfile(profile)
      .then(() => {
        Swal.fire("Good job!", "Log In Success", "success");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err,
          text: err.message,
        });
      });
  };
  //   const
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire(
          'Good job!',
          'Log In Success',
          'success'
        )
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err,
          text: err.message,
        });
      });
  };
  const handleGitLogIn = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire(
          'Good job!',
          'Log In Success',
          'success'
        )
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err,
          text: err.message,
        });
      });
  };

  return (
    <div className="">
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jhon Cena"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
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
                  {...register(
                    "password" //{required : "You Can't Register Without Keys"}
                  )}
                />
                <p className="text-red-500 p-2">
                  {errors?.password && errors.password.message}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Profile</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered"
                  {...register("image")}
                />
              </div>

              <div className="form-control mt-6">
                <input type={"submit"} className="btn btn-primary" />
              </div>
            </form>
            <hr />
            <div className="mt-5 grid p-2">
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
      </div>
    </div>
  );
};

export default Signup;
