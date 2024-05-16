import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GTM = () => {
  if (!GTM_ID) {
    console.error("GTM_ID is not defined");
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
    </>
  );
};

export default GTM;
