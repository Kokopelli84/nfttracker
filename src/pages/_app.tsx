import { AppProps } from 'next/app';
import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { Provider } from 'react-redux';
import Account from 'src/components/account';
import Nav from 'src/components/nav';
import { store } from '../state/store';
import '../styles/globals.css';

const APP_ID = process.env.NEXT_PUBLIC_APP_ID!;
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL!;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <div className="overflow-hidden">
          <div className="min-h-screen flex overflow-hidden">
            <div className="flex">
              <Nav />
            </div>
            <div className="flex-1 flex flex-col">
              <Account />
              <div className="py-10 px-20 overflow-y-auto h-full">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </MoralisProvider>
    </Provider>
  );
}

export default MyApp;
