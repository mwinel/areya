import "tailwindcss/tailwind.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../assets/globals.css";
import "nprogress/nprogress.css"; //styles of nprogress

import buildClient from "../api/build-client";
import useIsSignup from "../hooks/useIsSignup";
import useIsSignin from "../hooks/useIsSignin";

// Binding events for loading indicator.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps, currentUser }) => {
  let isSignup = useIsSignup();
  let isSignin = useIsSignin();

  if (isSignup || isSignin) {
    return <Component {...pageProps} />;
  }

  return <Component {...pageProps} />;
};

// Disable the ability to perform automatic static optimization,
// cause every page in the app to be server-side rendered.
MyApp.getInitialProps = async (appContext: any) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/v1/auth/currentuser");

  console.log('data', data.currentUser)

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default MyApp;
