import { Layout } from "../../layout";
import {
  SidebarLeft,
  MainWrapper,
  SidebarRight,
  ListItem,
} from "../../components";

const Dashboard = ({ data }) => {
  return (
    <Layout>
      {/* 3 column wrapper */}
      <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 min-w-0 bg-white xl:flex">
          {/* Account profile */}
          <SidebarLeft />
          {/* Results List */}
          <MainWrapper>
            {data["data"].map((hospital) => (
              <div key={hospital.id}>
                <ListItem
                  hospitalName={hospital.hospitalName}
                  location={hospital.location}
                  hospitalType={hospital.hospitalType}
                  phoneNumber={hospital.phoneNumber}
                  emergencyHotline={hospital.emergencyHotline}
                />
              </div>
            ))}
          </MainWrapper>
        </div>
        {/* Activity feed */}
        <SidebarRight />
      </div>
    </Layout>
  );
};

Dashboard.getInitialProps = async (context: any, client: any) => {
  const { data } = await client.get("/api/v1/hospitals");
  if (data) {
    return { data };
  }
  return null;
};

export default Dashboard;
