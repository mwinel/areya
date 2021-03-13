import { FC, useState, useCallback, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// import useRequest from "../../hooks/useRequest";
import { Button, Label, Input, Checkbox, Text } from "../../components";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [terms, setTerms] = useState(false);

  const router = useRouter();

  const checkTerms = useCallback(() => setTerms(!terms), [terms, setTerms]);

  const toggleShowPassword = useCallback(
    () => setPasswordShown(!passwordShown),
    [passwordShown, setPasswordShown]
  );

  // const { doRequest, errors } = useRequest({
  //   url: USER_Register_API_URL,
  //   method: "post",
  //   body: {
  //     email,
  //     password,
  //   },
  //   onSuccess: () => router.push('/dashboard'),
  // });

  const onSubmit = async (event: SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    // await doRequest();
    console.log("hooray");
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <img
          className="w-auto h-12 mx-auto"
          src="/images/logo.webp"
          alt="logo"
        /> */}
        <div className="mb-2">
          <Text variant="sectionHeading" className="text-center">
            Create your Account
          </Text>
        </div>
        <Link href="/auth/login">
          <p className="leading-5 text-center text-gray-600">
            Already have an account!{" "}
            <a className="font-medium text-indigo-600 transition duration-150 ease-in-out cursor-pointer hover:text-indigo-600 focus:outline-none focus:underline">
              Login to your Account.
            </a>
          </p>
        </Link>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-6 bg-white shadow sm:rounded-md sm:px-10">
          {/* {errors} */}
          <form onSubmit={onSubmit}>
            <div>
              <Label title="First name" />
              <Input
                name="firstName"
                placeholder="First name"
                type="text"
                onChange={setEmail}
              />
              <Label title="Last name" />
              <Input
                name="lastName"
                placeholder="Last name"
                type="text"
                onChange={setEmail}
              />
              <Label title="Email Address" />
              <Input
                name="email"
                placeholder="Enter your email address"
                type="email"
                onChange={setEmail}
              />
              <Label title="Phone Number" />
              <Input
                name="phoneNumber"
                placeholder="256 705777000"
                type="text"
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
                <Checkbox onClick={checkTerms} />
                <Text
                  variant="small"
                  className="pl-3 mt-1 text-indigo-500 cursor-pointer"
                  onClick={() => router.push('/terms')}
                >
                  I agree to terms.
                </Text>
              </div>
            </div>

            <div className="mt-3">
              <Button
                variant="primary"
                type="submit"
                disabled={!terms ? disabled : !disabled}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
