import { FC, useState, useCallback, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import useRequest from "../../hooks/useRequest";
import { Button, Label, Input, Checkbox, Text } from "../../components";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const router = useRouter();

  const toggleShowPassword = useCallback(
    () => setPasswordShown(!passwordShown),
    [passwordShown, setPasswordShown]
  );

  const { doRequest, errors } = useRequest({
    url: '/api/v1/auth/signin',
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => router.push('/dashboard'),
  });

  const onSubmit = async (event: SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-2">
          <Text variant="sectionHeading" className="text-center">
            Login to your Account
          </Text>
        </div>
        <Link href="/auth/register">
          <p className="leading-5 text-center text-gray-600">
            Don't have an account!{" "}
            <a className="font-medium text-indigo-600 transition duration-150 ease-in-out cursor-pointer hover:text-indigo-600 focus:outline-none focus:underline">
              Register Now!.
            </a>
          </p>
        </Link>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-6 bg-white shadow sm:rounded-md sm:px-10">
          {errors}
          <form onSubmit={onSubmit}>
            <div>
              <Label title="Email Address" />
              <Input
                name="email"
                placeholder="Enter your email address"
                type="email"
                onChange={setEmail}
              />
            </div>
            <div>
              <div className="flex justify-between ">
                <Label title="Password" />
                <div className="text-right mt-2">
                  <Text
                    variant="small"
                    className="text-sm text-indigo-600 cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {passwordShown ? "Hide Password" : "Show Password"}
                  </Text>
                </div>
              </div>
              <Input
                name="password"
                placeholder="Enter your password"
                type={passwordShown ? "text" : "password"}
                onChange={setPassword}
              />
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center">
                <Checkbox />
                <Text
                  variant="small"
                  className="pl-3 mt-1 text-gtay-800 cursor-pointer"
                >
                  Remember Password.
                </Text>
              </div>
            </div>

            <div className="mt-3">
              <Button
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
