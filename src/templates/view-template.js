import React from 'react';
import { graphql } from 'gatsby';
import HTMLView from '../components/HTMLView';
import Layout from '../components/Layout';

const ViewTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    title: postTitle,
    description: postDescription
  } = data.markdownRemark.frontmatter;

  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <HTMLView view={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query ViewBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
        }
        disqusShortname
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        title
      }
    }
  }
`;

export default ViewTemplate;
