import { useEffect } from 'react';
import { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import '@/styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Google Tag Manager
  useEffect(() => {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
    if (GTM_ID) {
      TagManager.initialize({ gtmId: GTM_ID });
    } else {
      console.error('GTM_ID is not defined');
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
