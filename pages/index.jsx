import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Action from '../components/Action';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Mission from '../components/Mission';

import Navbar from '../components/Navbar'
import Solutions from '../components/Solutions';

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
        <Hero />
        <Mission />
        <Solutions />
        <HowItWorks />
        <Action />
    </Fragment>
  )
}
