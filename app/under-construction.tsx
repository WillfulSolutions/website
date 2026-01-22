import Head from 'next/head';
import type { NextPage } from 'next';

const UnderConstruction: NextPage = () => {
  return (
    <>
    <Head>
        <title>Under Construction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/assets/img/favicon.ico" rel="icon" />
        <link href="/assets/img/favicon.png" rel="apple-touch-icon" />
    </Head>
    <main className="min-h-screen flex items-center justify-center bg-black">
     <Image
          src="/assets/logo-trim.png"
          alt="Logo"
          width={128}
          height={128}
          className="mx-auto mb-6"
          priority
        />
       <div className="text-center px-6">
         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#d0da50] font-sans">🚧 Under Construction 🚧</h1>
         <div className="mx-auto my-6 w-12 h-12 rounded-full border-8 border-[#e6d3a0] border-t-[#d0da50] animate-spin" aria-hidden="true"/>
         <p className="text-lg text-[#DBC078]">
         We're currently working on something awesome. Stay tuned!
         </p>
       </div>
    </main>
        </>
    );
};

export default UnderConstruction;