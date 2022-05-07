import Layout from "../components/layout/Layout";
import MaxWLayout from "../components/layout/MaxWLayout";
import Header from "../components/sections/services/Header";
import Main from "../components/sections/services/Main";
import Capabilities from "../components/sections/services/Capabilities";
import { datas } from "../components/datas/services";
import Quote from "../components/utils/Quote";

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
      </Layout>
    </>
  );
}

export default services;
