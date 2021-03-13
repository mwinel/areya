import { useRouter } from "next/router";

const useIsHome = () => {
  return useRouter().pathname === "/";
};

export default useIsHome;
