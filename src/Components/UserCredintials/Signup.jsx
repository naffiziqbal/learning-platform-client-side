import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../UserContext/AuthContext";

const Signup = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthProvider);
  const navigate = useNavigate()
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

    createUser(data.email, data.name, data.password).then((result) => {
      const user = result.user;
      console.log(user);
fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          updateProfile(data.name, imgData.data.url)
          navigate('/')

        }
      });
    });

    
  };
  //Handle User Info
  const updateProfile = (displayName, photoURL) => {
    const profile = {
      displayName,
      photoURL,
    };
    console.log(profile);

    handleUpdateProfile(profile)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  //   const

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card  w-full shadow-2xl bg-base-100">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
