import { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID, gtmScriptContent, gtmNoScriptContent } from '../lib/gtm';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{ __html: gtmScriptContent }}
          />
        )}
      </Head>
      <body>
        {GTM_ID && (
          <noscript dangerouslySetInnerHTML={{ __html: gtmNoScriptContent }} />
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
