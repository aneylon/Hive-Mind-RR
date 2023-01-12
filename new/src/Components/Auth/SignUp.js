import { useForm } from "react-hook-form";
import { rememberUser } from "./AuthShared";
import { useSignUp } from "../../hooks/useSignUp";

export default function SignUp() {
  const { signUp, error, isLoading } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (data) => {
    console.log(data);
    rememberUser(data.remember, data.email);
    await signUp(data.email, data.password);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Email : </label>
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
        <input type="submit" value="Sign Up" disabled={isLoading} />
      </form>
      <div>sign up error? : {error}</div>
    </div>
  );
}
