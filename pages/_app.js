import '@/styles/globals.css';
import GTM from '../lib/gtm';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GTM />
      <Component {...pageProps} />
    </>
  );
}
