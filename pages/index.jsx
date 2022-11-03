import { useIntl } from 'react-intl';
import Action from '../components/Action';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Layout from '../components/Layout';
import Mission from '../components/Mission';
import Solutions from '../components/Solutions';

export default function Home({ dir }) {

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });

  return (
    <Layout title={title} description={description}>
      <Hero />
      <Mission />
      <Solutions />
      <HowItWorks />
    </Layout>
  )
}
