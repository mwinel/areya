import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <div className="alert alert-success" role="alert">
      You are signed in.
    </div>
  ) : (
    <div className="alert alert-danger" role="alert">
      You are not signed in.
    </div>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE!");
  const client = buildClient(context);
  const { data } = await client.get("/api/v1/users/currentuser");
  return data;
};

export default LandingPage;
