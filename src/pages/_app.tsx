import { modalPortalId } from "@/components/elements/v1/modal/ModalPortal";
import { AuthContextProvider } from "@/components/functional/authProvider/AuthProvider";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <div aria-hidden id={modalPortalId} />
    </AuthContextProvider>
  );
};
export default App;
