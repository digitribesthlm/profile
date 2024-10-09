import Image from 'next/image';
import Head from 'next/head';
import { getSEO } from '../lib/seo'; // Adjust the path if necessary..

const seo = getSEO("Patrik Alriksson - Home", "Lär känna Patrik Alriksson, en expert inom marknadsföring och företagsekonomi.");

export async function getServerSideProps() {
  return {
    props: {
      googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  };
}

export default function Home({ googleSiteVerification }) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta charSet={seo.metaTags.charset} />
        <meta name="viewport" content={seo.metaTags.name.viewport} />
        <meta name="description" content={seo.metaTags.name.description} />
        <meta name="keywords" content="Patrik Alriksson, marknadsföring, företagsekonomi, Stockholm, B2B, Makeable STHLM" />
        <meta name="author" content="Patrik Alriksson" />
        <meta name="google-site-verification" content={googleSiteVerification} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.metaTags.name.description} />
        <meta property="og:image" content="/patrik-21.png" />
        <meta property="og:url" content="https://www.alriksson.nu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.metaTags.name.description} />
        <meta name="twitter:image" content="/patrik-21.png" />
      </Head>

      <main className="min-h-screen flex flex-col lg:flex-row bg-white">
        {/* Left Section: Photo */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-4 lg:p-0">
          <div className="w-full lg:w-3/4 h-64 lg:h-3/4 relative">
            <div className="relative w-full h-full">
              <Image
                src="/patrik-21.png"
                alt="Patrik Alriksson"
                fill
                className="object-cover object-right rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-4 lg:py-0">
          <p className="text-xl text-gray-500">Stockholm - 2024</p>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mt-2">Patrik Alriksson</h1>
          
          <p className="text-sm lg:text-xl text-gray-500 mt-4">
            Jag hjälper marknadsteam, byråer och b2b-företag att nå fantastiska resultat genom att dela med mig av kunskap, verktyg och metoder som fungerar. Målet är att skapa fler lönsamma kunder. Med sinne för siffror, diagram och statistik avslöjar jag vad som egentligen händer med dina och konkurrenternas aktiviteter på nätet. Så har du frågor om hur du ökar rätt typ av besökstrafik till din hemsida – och konverterar dem till kunder – får du gärna kontakta mig. Utöver en fil kand i beteendevetenskap har jag en magisterexamen i företagsekonomi och ett genuint intresse för både marknadsföring och affärer.
          </p>

          <div className="mt-6 flex space-x-2 lg:space-x-4">
            <a
              href="https://www.linkedin.com/in/patrikalriksson/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm lg:btn-md"
            >
              LinkedIn
            </a>
            <a
              href="https://www.makeabelsthlm.se"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm lg:btn-md"
            >
              Makeable STHLM
            </a>
            <a
              href="mailto:patrik@makeablesthlm.se"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm lg:btn-md"
            >
              Let's Talk
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm lg:btn-md"
            >
              Resume.se - Ny Byrå, Hybrid  
            </a>

            

          </div>
          
          <div className="mt-6 text-gray-500">
            <p>Copyright © 2024 | All Rights Reserved. alriksson.nu</p>
          </div>
        </div>
      </main>
    </>
  );
}
