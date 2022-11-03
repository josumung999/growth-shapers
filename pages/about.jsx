import React from 'react'
import { useIntl } from 'react-intl'
import Layout from '../components/Layout';

const About = () => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.about.head.title" });
  const description = intl.formatMessage({ id: "page.about.head.description" });
  return (
    <Layout title={title} description={description}>
      A propos
    </Layout>
  )
}

export default About