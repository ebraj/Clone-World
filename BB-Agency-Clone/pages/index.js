import Header from "../components/sections/main-page/Header";
import Layout from "../components/layout/Layout";
import Work from "../components/sections/main-page/Work";
import About from "../components/sections/main-page/About";
import Partner from "../components/sections/main-page/Partner";
import MaxWLayout from "../components/layout/MaxWLayout";
import { datas } from "../components/datas/landing";
import ProjectB from "../components/utils/ProjectB";

// Components
export default function Home() {
  return (
    <>
      <Layout>
        {/* Header Section*/}
        <MaxWLayout>
          <Header />
        </MaxWLayout>

        {/* Work Section */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Work datas={datas} />
        </MaxWLayout>

        {/* About Section */}
        <MaxWLayout>
          <About />
        </MaxWLayout>

        {/* LpPartner Section */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Partner datas={datas} />
        </MaxWLayout>

        {/* ProjectB */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <ProjectB />
        </MaxWLayout>
      </Layout>
    </>
  );
}
