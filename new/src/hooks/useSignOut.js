import { useAuthContext } from "./useAuthContext";
// import { useWorkoutsContext } from "./useWorkoutsContext";

export const useSignOut = () => {
  const { dispatch } = useAuthContext();
  // const { dispatch: dispatchWorkouts } = useWorkoutsContext();

  const signOut = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "SIGNOUT" });
    // dispatchWorkouts({ type: "SET_WORKOUTS", payload: null });
  };

  return { signOut };
};
