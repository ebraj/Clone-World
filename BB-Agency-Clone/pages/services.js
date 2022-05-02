import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/services-rltd/Header";

function services() {
  return (
    <>
      {/* Main Div */}
      <div className="text-white relative bg-custom-background-green px-5 md:px-16 lg:px-28">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Header />
        </div>
      </div>
    </>
  );
}

export default services;
