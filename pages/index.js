import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Section: Photo */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-4 lg:p-0">
        <div className="w-full lg:w-3/4 h-64 lg:h-3/4 relative">
          <Image
            src="/patrik-21.png"
            alt="Patrik Alriksson"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="rounded-lg shadow-lg"
          />
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
            href="https://www.linkedin.com/"
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
            Lets Talk
          </a>

         
            
     
          
        </div>
        <br></br><br></br><br></br><br></br>
          Copyright © 2024 | All Rights Reserved. alriksson.nu

      </div>
    </main>
  );
}