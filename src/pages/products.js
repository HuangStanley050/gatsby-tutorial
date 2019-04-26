import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const Products = ({ data }) => {
  //console.log(data);
  return (
    <Layout>
      <h1>Our Products</h1>
      {data.products.edges.map(node => {
        return (
          <div key={node.node.id} style={{ padding: "1rem", margin: "1rem o" }}>
            <Img fixed={node.node.image.fixed} />
            <h3 style={{ marginBottom: "0.3rem" }}>
              {node.node.title}{" "}
              <span style={{ color: "green", marginLeft: "2rem" }}>
                ${node.node.price}
              </span>
            </h3>
            <p>{node.node.description.description}</p>
            <Link to="/">
              <h2>Details</h2>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            fixed(width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Products;
