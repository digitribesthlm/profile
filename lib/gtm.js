import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GTM = () => {
  if (!GTM_ID) {
    console.error("GTM_ID is not defined");
    return null;
  }

  const initGTM = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      var f = document.getElementsByTagName('script')[0],
        j = document.createElement('script');
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      f.parentNode.insertBefore(j, f);
    } else {
      console.error('dataLayer is not available');
    }
  };

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="beforeInteractive"
        onLoad={initGTM}
      />
    </>
  );
};

export default GTM;