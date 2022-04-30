import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import LPAbout from "../components/LPAbout";
import LPPartner from "../components/LPPartner";

// Components
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          BB Agency - Human Experience Design and Development Agency
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Div */}
      <div className="relative bg-custom-background-green px-5 md:px-16 lg:px-28">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Header />
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white px-5 md:px-16 lg:px-28 py-14">
        <div className="max-w-screen-xl mx-auto">
          <Work />
        </div>
      </div>

      {/* LpAbout Section */}
      <div className="bg-custom-background-green px-5 md:px-16 lg:px-28 py-14">
        <div className="max-w-screen-xl mx-auto">
          <LPAbout />
        </div>
      </div>

      {/* LpPartner Section */}
      <div className="bg-white px-5 md:px-16 lg:px-28 py-14">
        <div className="max-w-screen-xl mx-auto">
          <LPPartner />
        </div>
      </div>

      {/* Footer Portion */}
      <div className="bg-white px-5 md:px-16 lg:px-28 py-14">
        <div className="max-w-screen-xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
