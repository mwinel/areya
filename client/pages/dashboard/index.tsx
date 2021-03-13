import { Layout } from "../../layout";
import { SidebarLeft, MainWrapper, SidebarRight } from "../../components";

const Dashboard = () => {
  return (
    <Layout>
      {/* 3 column wrapper */}
      <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 min-w-0 bg-white xl:flex">
          {/* Account profile */}
          <SidebarLeft />
          {/* Results List */}
          <MainWrapper />
        </div>
        {/* Activity feed */}
        <SidebarRight />
      </div>
    </Layout>
  );
};

export default Dashboard;
