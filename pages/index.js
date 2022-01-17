import Head from 'next/head';
import Modal from '../components/modal';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NiftyTracker</title>
        <meta name="description" content="A place for all of your NFT needs" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Modal />
    </div>
  );
}
