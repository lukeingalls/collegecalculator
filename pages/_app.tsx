import "styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* The header is currently too ugly to use */}
      {/* <Header /> */}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
