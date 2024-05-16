import '@/styles/globals.css';
import GTM from '../lib/gtm';

function App({ Component, pageProps }) {
  return (
    <>
      <GTM />
      <Component {...pageProps} />
    </>
  );
}

export default App;
