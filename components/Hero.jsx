import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router';

const Hero = () => {
  const { locales } = useRouter();
  
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });

  return (
    <div>
      <FormattedMessage>
        {title}
      </FormattedMessage>
    </div>
  )
}

export default Hero