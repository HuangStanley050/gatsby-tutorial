import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Button } from "reactstrap";
import { FaAirbnb } from "react-icons/fa";
import Info from "../components/info";
//import Section from "../components/section/section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button>hello</Button>
    <FaAirbnb style={{ fontSize: "2rem" }} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing">testing page</Link>
  </Layout>
);

export default IndexPage;
