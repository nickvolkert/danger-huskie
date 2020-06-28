//React Table Stakes
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";
import ScrollMemory from 'react-router-scroll-memory';
//import VectorWorks from "./json/VectorWorks.json"

//Components
import Wrapper from "./components/Wrapper"
import ContentWrapper from "./components/ContentWrapper"
import Footer from "./components/Footer"

//Pages
import Home from "./pages/Home"

//404
import Page404 from "./pages/Page404/Page404";

//Links page
import Links from "./pages/Links/Links"

const App = () => (
  <Router>
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Personal portfolio of Chicagoland based UX/UI Designer and Illustrator Nick Volkert"></meta>
        <meta name="keywords" content="Nick Volkert, ux, user experience, user interface design, ux design,
        ui design, CSS, HTML, javascript, freelance artist, powerpoint, illustrator, illustration, chicago,
        illinois, IL, website coding, website production, artist, painting, abstract art, tee shirt design,
        album art, album design, comics, gone clean wholesome fun, GCWF, thursday treat, nickv47, greater chicagoland,
        chicago, schaumburg, elk grove village, elmhurst"></meta>
        <meta name="copyright" content="©2001-2020 Nick Volkert"></meta>
        <meta name="author" content="Nick Volkert"></meta>
        <meta name="email" content="nick@nickvolkert.com"></meta>
      </Helmet>
      <ContentWrapper>
      {/*<ScrollToTop />*/}
      <ScrollMemory />
        <Switch>

          {/* Core Site */}
          <Route exact path="/" component={Home} />

          {/* 404 and No Match */}
          <Route component={Page404} />

          {/* Links Page */}
          <Route exact path="/links" component={Links} />
          </Switch>
      </ContentWrapper>
      <Footer />
      </Wrapper>
  </Router>
)

export default App;
