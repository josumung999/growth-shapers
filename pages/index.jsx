import Head from 'next/head';
import { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Navbar from '../components/Navbar'

export default function Home({ dir }) {

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });

  return (
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
        
          <Navbar />
          <h1 className="text-3xl font-bold underline">
            <FormattedMessage id="page.home.title" />
          </h1>
          <p>
            <FormattedMessage id="page.home.description" />
          </p>
      </Fragment>
  )
}
