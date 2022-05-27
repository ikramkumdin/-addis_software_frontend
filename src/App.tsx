import { Helmet, HelmetProvider } from 'react-helmet-async';
import {GlobalStyle} from '../src/styles/global'
import Layout from "./components/layout/Layout";
import Routes from "./Routes";
function App() {
  return (
    <>
    <HelmetProvider>
    <GlobalStyle/>
    <Helmet>
          <title>Addis Software test project</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/> 
              
    </Helmet>
    <Layout>
          
    </Layout>

    </HelmetProvider>

   
    </>
  )
}
export default App;

 