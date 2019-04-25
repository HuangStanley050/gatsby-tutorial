import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
//import dude from "../images/newImages/tekken-7-hd-wallpapers-33753-5970439.jpg";

const Dude = props => {
  return (
    <StaticQuery
      render={data => {
        console.log(data);
        return <Img fluid={data.file.childImageSharp.fluid} />;
      }}
      query={getDude}
    />
  );
};

const getDude = graphql`
  {
    file(
      relativePath: { eq: "newImages/tekken-7-hd-wallpapers-33753-5970439.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Dude;
