import { datas } from "../components/datas/about-us";
import Layout from "../components/layout/Layout";
import MaxWLayout from "../components/layout/MaxWLayout";
import Total from "../components/sections/about-us/Total";
import Upperpart from "../components/sections/about-us/Upperpart";
import ProjectB from "../components/utils/ProjectB";
import JoinA from "../components/sections/about-us/JoinA";

function aboutus() {
  return (
    <>
      <Layout>
        {/* Upper Part */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Upperpart datas={datas.topPhotos} />
        </MaxWLayout>

        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Total datas={datas} />
        </MaxWLayout>

        <MaxWLayout
          bgColor="bg-custom-very-light-green"
          textColor="text-custom-background-green"
        >
          <JoinA datas={datas} />
        </MaxWLayout>

        {/* ProjectB */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <ProjectB onTop={false} />
        </MaxWLayout>
      </Layout>
    </>
  );
}

export default aboutus;
