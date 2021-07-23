import {AppProps} from 'next/app';
import DefaultLayout from '../layouts/defaultLayout';

export default function App({Component, pageProps}: AppProps) {
  return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
  );
}