import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSignIn } from "../../hooks/useSignIn";
import { rememberUser, localStorageUserName } from "./AuthShared";

export default function SignIn() {
  const { signIn, error, isLoading } = useSignIn();
  const savedUserName = localStorage.getItem(localStorageUserName);
  const checkRemember = savedUserName !== null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: savedUserName, remember: checkRemember },
  });
  const submit = async (data) => {
    console.log(data);
    rememberUser(data.remember, data.email);
    await signIn(data.email, data.password);
  };
  // const rememberUser = (remember, email) => {
  //   console.log(remember, email);
  //   if (remember) {
  //     localStorage.setItem(localStorageUserName, email);
  //   } else {
  //     localStorage.clear(localStorageUserName);
  //   }
  // };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder="email"
          type="email"
          name="email"
          id="email"
          disabled={isLoading}
          {...register("email", { required: "email required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          placeholder="password"
          type="password"
          name="password"
          id="password"
          disabled={isLoading}
          {...register("password", { required: "password required" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <input
          type="checkbox"
          name="remember"
          id="remember"
          disabled={isLoading}
          {...register("remember")}
        />
        <input type="submit" value="Sign In" disabled={isLoading} />
      </form>
      <div>{console.log(errors)}</div>
      <div>sign in error? : {error}</div>
    </div>
  );
}
