import { useRouter } from "next/router";

const useIsSignin = () => {
  return useRouter().pathname === "/auth/signin";
};

export default useIsSignin;
