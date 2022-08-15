import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Action from '../components/Action';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Layout from '../components/Layout';
import Mission from '../components/Mission';

import Navbar from '../components/Navbar'
import Solutions from '../components/Solutions';

export default function Home({ dir }) {
  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });

  return (
    <Layout title={title} description={description}>
      <Hero />
      <Mission />
      <Solutions />
      <HowItWorks />
      <Action />
    </Layout>
  )
}
