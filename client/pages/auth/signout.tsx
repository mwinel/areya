import { FC, useEffect } from "react";
import { useRouter } from "next/router";

import useRequest from "../../hooks/useRequest";

interface SignOutProps {}

const SignOut: FC<SignOutProps> = () => {
  const router = useRouter();

  const { doRequest } = useRequest({
    url: "/api/v1/auth/signout",
    method: "post",
    body: {},
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div></div>;
};

export default SignOut;
