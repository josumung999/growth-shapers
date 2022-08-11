import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { IntlProvider } from 'react-intl';
import AOS from 'aos';
import "aos/dist/aos.css";

import en from '../lang/en.json';
import fr from '../lang/fr.json';

import '../styles/globals.css';
import { useEffect } from 'react';

// Implementing locales
const messages = {
  en,
  fr,
}


// Getting the direction based on the type of locale
function getDirection(locale) {
  if (locale === "ar") {
    return 'rtl';
  }

  return "ltr"
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();


  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once : true,
      offset: 50
    });
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} dir={getDirection(locale)} />
      </IntlProvider>
    </ThemeProvider>
  )
}

export default MyApp
