import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='h-full'>
      <Head>
        <title>NiftyTracker</title>
        <meta name='description' content='A place for all of your NFT needs' />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='flex justify-center items-center h-full'>
        <div className='bg-white w-1/3 text-center p-10 rounded-lg '>
          <h1 className='text-3xl font-semibold mb-5'>Welcome to NiftyTracker!</h1>
          <p className='mb-5'>
            This is a place for you to manage your NFT portolio, mint new ones & track wallets of
            interest.
          </p>
          <p>
            Use the navigation on the left to find what you need & make sure you are authenticated
            through MetaMask using the button on the top left of the page.
          </p>
        </div>
      </div>
    </div>
  );
}
