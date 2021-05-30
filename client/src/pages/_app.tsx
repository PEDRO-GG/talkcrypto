import { AppProps } from "next/app";
import { useRouter } from "next/router";
import axios from "axios";
import "../../styles/globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/auth";

axios.defaults.baseURL = "http://localhost:3001";

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const isAuthRoute = authRoutes.includes(pathname);

  return (
    <AuthProvider>
      {!isAuthRoute && <Navbar />}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
