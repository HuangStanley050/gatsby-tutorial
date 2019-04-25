import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Images = ({ data }) => {
  const images = data.allFile.edges;
  return (
    <Layout>
      {images.map((item, i) => (
        <h6 key={i}>{item.node.relativePath}</h6>
      ))}
    </Layout>
  );
};
export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`;
export default Images;
