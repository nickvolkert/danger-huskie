//React Table Stakes
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";
import ScrollMemory from 'react-router-scroll-memory';
import DangerHuskie from './json/DangerHuskie';

//Components
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./components/Footer";

//Core Site
import Home from "./pages/Home";
import _WorksLanding from "./pages/Works/_WorksLanding";
import About from "./pages/About";
import Shops from "./pages/Shops";

//Artworks
import AnnoyedSasquatch from "./pages/Works/AnnoyedSasquatch";
import AnnoyedYeti from "./pages/Works/AnnoyedYeti";
import HappyRainbow from "./pages/Works/HappyRainbow";
import JoyousRainbow from "./pages/Works/JoyousRainbow";
import PencilBear from "./pages/Works/PencilBear";
import VarsityPumpkin from "./pages/Works/VarsityPumpkin";
import Calendar2020 from "./pages/Works/Calendar2020";
import BlackElectricCat from "./pages/Works/BlackElectricCat";
import WhiteElectricCat from "./pages/Works/WhiteElectricCat";

//News
import _NewsLanding from "./pages/News/_NewsLanding";

//Links page
import LinksPage from "./pages/LinksPage";

//404
import Page404 from "./pages/Page404";

const App = () => (
  <Router>
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Danger Huskie: A vector art project by Chicagoland artist Nick Volkert aka nickv47"></meta>
        <meta name="keywords" content="Nick Volkert, vector art, vector graphics, adobe illustrator artist, illustration, nickv47, greater chicagoland,
        chicago, schaumburg, elk grove village, elmhurst, illinois, illinois artist"></meta>
        <meta name="copyright" content="©2020 Nick Volkert"></meta>
        <meta name="author" content="Nick Volkert"></meta>
        <meta name="email" content="dangerhuskie@nickvolkert.com"></meta>
      </Helmet>
      <Navigation />
      <ContentWrapper>
      <ScrollMemory />
        <Switch>

          {/* Core Site */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shops" component={Shops} />

          {/* Works */}
          <Route exact path="/works" component={_WorksLanding} />
          <Route exact path={DangerHuskie[2].link} component={AnnoyedSasquatch} />
          <Route exact path={DangerHuskie[1].link} component={AnnoyedYeti} />
          <Route exact path={DangerHuskie[4].link} component={HappyRainbow} />
          <Route exact path={DangerHuskie[5].link} component={JoyousRainbow} />
          <Route exact path={DangerHuskie[0].link} component={PencilBear} />
          <Route exact path={DangerHuskie[3].link} component={VarsityPumpkin} />
          <Route exact path={DangerHuskie[6].link} component={Calendar2020} />
          <Route exact path={DangerHuskie[7].link} component={BlackElectricCat} />
          <Route exact path={DangerHuskie[8].link} component={WhiteElectricCat} />

          {/* News Page */}
          <Route exact path="/news" component={_NewsLanding} />

          {/* Links Page */}
          <Route exact path="/links" component={LinksPage} />

          {/* 404 and No Match */}
          <Route component={Page404} />
          </Switch>
      </ContentWrapper>
      <Footer />
      </Wrapper>
  </Router>
)

export default App;
