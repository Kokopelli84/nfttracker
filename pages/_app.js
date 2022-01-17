import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import Nav from '../components/nav';
import Account from '../components/account';
import { Provider } from 'react-redux';
import { store } from '../state/store';

const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

function MyApp({ Component, pageProps }) {
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
              <div className="p-10 overflow-y-auto h-full">
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
