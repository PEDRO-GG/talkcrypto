import { AppProps } from "next/app";
import { useRouter } from "next/router";
import axios from "axios";
import "../../styles/globals.css";
import Navbar from "../components/Navbar";

axios.defaults.baseURL = "http://localhost:3001";

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const isAuthRoute = authRoutes.includes(pathname);

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default App;
