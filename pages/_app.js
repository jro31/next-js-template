// TODO - Update the '"name": "next-js-template",' line in 'package.json' to your project name
// TODO - Update favicon

import { Provider } from 'react-redux';

import store from '../store';
import Layout from '../components/layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
