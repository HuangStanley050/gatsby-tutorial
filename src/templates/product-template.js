import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default () => {
  return (
    <Layout>
      <h1>Product template</h1>
      <Link to="/products">
        <h3>Back to products</h3>
      </Link>
    </Layout>
  );
};
