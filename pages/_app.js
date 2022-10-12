
import GlobalStyle from "./components/globalstyle.js"
import Layout from "./components/Layout.js"

function MyApp({ Component, pageProps }) {
  return 
  (
    <> 
    <GlobalStyle/>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </>
  );
}

export default MyApp
