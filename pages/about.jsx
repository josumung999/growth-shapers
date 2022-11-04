import React from 'react'
import { useIntl } from 'react-intl'
import Intro from '../components/about/Intro';
import Team from '../components/about/Team';
import Values from '../components/about/Values';
import Layout from '../components/Layout';

const About = () => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.about.head.title" });
  const description = intl.formatMessage({ id: "page.about.head.description" });
  const headerRelative = intl.formatMessage({ id: "page.about.header.relativeText" });
  const headerTitle = intl.formatMessage({ id: "page.about.header.title" });
  const headerSub = intl.formatMessage({ id: "page.about.header.subtitle" });
  return (
    <Layout 
      title={title} 
      description={description} 
      headerRelative={headerRelative} 
      headerTitle={headerTitle} 
      headerSub={headerSub}
    >
      <Intro />
      <Values />
      <Team />
    </Layout>
  )
}

export default About