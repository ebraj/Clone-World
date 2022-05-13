import { datas } from "../components/datas/about-us";
import Layout from "../components/layout/Layout";
import MaxWLayout from "../components/layout/MaxWLayout";
import Total from "../components/sections/about-us/Total";
import Upperpart from "../components/sections/about-us/Upperpart";

function aboutus() {
  return (
    <>
      <Layout>
        {/* Upper Part */}
        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Upperpart datas={datas.topPhotos} />
        </MaxWLayout>

        <MaxWLayout bgColor="bg-white" textColor="text-custom-background-green">
          <Total datas={datas.totalLists} />
        </MaxWLayout>
      </Layout>
    </>
  );
}

export default aboutus;
