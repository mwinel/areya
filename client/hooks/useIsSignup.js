import { useRouter } from "next/router";

const useIsSignup = () => {
  return useRouter().pathname === "/auth/signup";
};

export default useIsSignup;
