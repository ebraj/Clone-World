import Head from "next/head";
import React from "react";

import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          BB Agency - Human Experience Design and Development Agency
        </title>
        <meta
          name="description"
          content="BB Agency clone using Nextjs & Tailwind CSS by Ebraj."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full justify-between min-h-screen">
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
