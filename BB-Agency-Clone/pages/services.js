import Layout from "../components/layout/Layout";
import MaxWLayout from "../components/layout/MaxWLayout";
import Header from "../components/sections/services/Header";
import Main from "../components/sections/services/Main";
import Capabilities from "../components/sections/services/Capabilities";
import Result from "../components/sections/services/Result";
import Deliver from "../components/sections/services/Deliver";
import { datas } from "../components/datas/services";
import Quote from "../components/utils/Quote";
import ProjectB from "../components/utils/ProjectB";

function services() {
  return (
    <>
      <Layout>
        {/* Header Section */}
        <MaxWLayout>
          <Header datas={datas} />
        </MaxWLayout>

        {/* Main Section */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Main datas={datas} />
        </MaxWLayout>

        {/* Quote Section */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Quote data={datas.quoteDetails[0]} />
        </MaxWLayout>

        {/* Capabilities Section */}
        <MaxWLayout
          bgColor="bg-custom-very-light-green"
          textColor="text-custom-background-green"
        >
          <Capabilities datas={datas} />
        </MaxWLayout>

        {/* Result Section */}
        <MaxWLayout>
          <Result datas={datas} />
        </MaxWLayout>

        {/* Deliver Section */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Deliver datas={datas} />
        </MaxWLayout>

        {/* ProjectB */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <ProjectB />
        </MaxWLayout>
      </Layout>
    </>
  );
}

export default services;
