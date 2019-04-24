import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Info = props => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              author
              info
            }
          }
        }
      `}
      render={data => {
        const information = data.site.siteMetadata;
        const { title, info, author, description } = information;
        console.log(info);
        return (
          <div>
            <h2>title: {title}</h2>
            <h2>info: {info}</h2>
            <h2>author: {author}</h2>
            <h2>description: {description}</h2>
          </div>
        );
      }}
    />
  );
};

export default Info;
