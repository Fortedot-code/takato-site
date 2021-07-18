import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'

// Export Template for use in CMS preview
export const MusicPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  accordion
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>
  </main>
)

const MusicPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <MusicPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default MusicPage

export const pageQuery = graphql`
  query MusicPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        accordion {
          title
          description
        }
      }
    }
  }
`
