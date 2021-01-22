import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../assets/css/nucleo-icons.css";
import "../assets/scss/blk-design-system-react.scss?v=1.2.0";
import "../assets/demo/demo.css";
import "../assets/css/all.css";
import SEO from "./seo";

const Layout = ({ children, title, keywords, stitle }) => {
  return (
    <>
      <SEO title={stitle} keywords={keywords}/>
      <Header title={title} />
      <div className="wrapper">
        <div className="main">
          <div className="content-center">{children}</div>
        </div>
        <Footer title={title} />
      </div>
    </>
  );
};

export default Layout;
