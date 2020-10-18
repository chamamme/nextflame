import '../styles/globals.css';
import { connect, Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

MyApp.getInitialProps = async appContext => {
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  };

  return { pageProps};
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp)