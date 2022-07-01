import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';

import Navbar from '../components/Navbar'

export default function Home({ dir }) {
  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.meta.description" });

  return (
    <div className="container">
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
    </div>
  )
}
