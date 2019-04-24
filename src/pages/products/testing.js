import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const Testing = props => {
  return (
    <Layout>
      <h1>Testing</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default Testing;
