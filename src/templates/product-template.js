import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default ({ data }) => {
  //console.log(data);
  const { title, price } = data.contentfulProduct;
  const { description } = data.contentfulProduct.description;
  const { fluid } = data.contentfulProduct.image;
  return (
    <Layout>
      <h1>Product template</h1>
      <h2>
        {title}
        <span style={{ color: "green", marginLeft: "0.5rem" }}> ${price}</span>
      </h2>
      <Img fluid={fluid} />
      <p>{description}</p>
      <Link to="/products">
        <h3>Back to products</h3>
      </Link>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      title
      price
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
