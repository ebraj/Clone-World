import Layout from "../components/layout/Layout";
import MaxWLayout from "../components/layout/MaxWLayout";
import { datas } from "../components/datas/insights";
import ThreeColLayout from "../components/sections/insights/ThreeColLayout";
import ProjectB from "../components/utils/ProjectB";
import UpperPart from "../components/sections/insights/UpperPart";

function insights() {
  return (
    <>
      <Layout>
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <UpperPart />
          <ThreeColLayout datas={datas} />
        </MaxWLayout>

        {/* ProjectB */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <ProjectB />
        </MaxWLayout>
      </Layout>
    </>
  );
}

export default insights;
