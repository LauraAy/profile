import * as React from 'react';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import RoutesTree from "./routes/RoutesTree";
import NavbarComponent from './components/Navbar';

function App() {

    return (
      <>
        <ScrollToTop />
        <NavbarComponent />
        <RoutesTree />   
      </>
    )
  }

export default App;