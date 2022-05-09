import Layout from "../components/layout/Layout";
import MaxWLayout from "../components/layout/MaxWLayout";
import Work from "../components/sections/main-page/Work";
import ProjectB from "../components/utils/ProjectB";
import { datas } from "../components/datas/landing";

function work() {
  return (
    <>
      <Layout>
        {/* Work Section */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Work datas={datas.workImgDetails} />
        </MaxWLayout>

        {/* ProjectB */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <ProjectB />
        </MaxWLayout>
      </Layout>
    </>
  );
}

export default work;
