import Head from "next/head";

import { modalPortalId } from "@/components/elements/v1/modal/ModalPortal";
import { AuthContextProvider } from "@/components/functional/authProvider/AuthProvider";
import "../styles/_global.scss";

import type { AppProps } from "next/app";

export const pageWrapperId = "pageWrapperId";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div id={pageWrapperId}>
      <Head>
        <title>Training Support App</title>
        <meta content="#FFF" name="theme-color" />
        <meta content="著者: S.Taniguchi" name="Description" />
      </Head>
      <AuthContextProvider>
        <Component {...pageProps} />
        <div aria-hidden id={modalPortalId} />
      </AuthContextProvider>
    </div>
  );
};
export default App;
