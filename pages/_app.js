import React from "react";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />

      <Script src="/js/puescofest.js" strategy="beforeInteractive" />
      {/* <Script src="/js/jqBootstrapValidation.js" strategy="lazyOnload" />
      <Script src="/js/contact_me.js" strategy="lazyOnload" /> */}
    </>
  );
};

export default App;
