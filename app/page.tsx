import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';

export default function Home() {
    return (
    <>
      <Head>
        <title>Willful Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          {/* Add other sections/components below (Why us, Services, Features, etc.) */}
        </main>
        <Footer />
      </div>
    </>
  );
}
