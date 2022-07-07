import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { useIntl } from 'react-intl';
import Hero from '../components/Hero';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar'

export default function Home({ dir }) {
  const locales = useRouter();
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
      <Hero />
    </Fragment>
  )
}
