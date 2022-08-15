import React from 'react'
import { useIntl } from 'react-intl';
import Layout from '../components/Layout';

const Contact = () => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.contact.head.title" });
  const description = intl.formatMessage({ id: "page.contact.head.meta.description" });

  return (
    <Layout title={title} description={description}>
      Contact us
    </Layout>
  )
}

export default Contact