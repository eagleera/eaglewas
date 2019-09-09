import React from "react";
import styled from "styled-components";

const ArticleSection = () => {
  //  const postEdges = allMarkdownRemark.edges;
  return (
    <Container>
      <h1 className="ma0 white pb4">You can read some of my last thoughts...</h1>
      {/* <PostListing postEdges={postEdges} /> */}
    </Container>
    
  );
};

export default ArticleSection;

const Container = styled.div.attrs(() => ({
   className: "bg-my-black tc pv5"
 }))`
   font-size: 1.5rem;
   letter-spacing: 0.1rem;
   line-height: 2.2rem;
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
