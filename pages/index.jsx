import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Hero from '../components/Hero';

import Navbar from '../components/Navbar'

export default function Home({ dir }) {
  const { locales } = useRouter();

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
      <main className='relative'>
        <Hero />
      </main>
    </Fragment>
  )
}
