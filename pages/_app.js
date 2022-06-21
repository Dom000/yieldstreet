import "../styles/globals.css";
import { store } from "../features/store";
import { Provider } from "react-redux";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  );
}

export default MyApp;
