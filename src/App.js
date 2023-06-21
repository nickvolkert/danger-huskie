//React Table Stakes
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';
import DangerHuskie from './json/DangerHuskie';
import { hydrate, render } from "react-dom";

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
import Contact from "./pages/Contact";

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
import ChicagoDogFlag from "./pages/Works/ChicagoDogFlag";
import PencilBearFlag from "./pages/Works/PencilBearFlag";
import OversizedFoamHat from "./pages/Works/OversizedFoamHat";
import CloudHug from "./pages/Works/CloudHug";
import UnhappyRainbow from "./pages/Works/UnhappyRainbow";
import AngryRainbow from "./pages/Works/AngryRainbow";
import DHLogoWText from "./pages/Works/DHLogoWText";
import DangerHuskieHead from "./pages/Works/DangerHuskieHead";
import DHHardcoreLogo from "./pages/Works/DHHardcoreLogo";
import FightingBurger from "./pages/Works/FightingBurger";
import VarsityPumpkinCreepin from "./pages/Works/VarsityPumpkinCreepin";
import VarsityPumpkinGrave from "./pages/Works/VarsityPumpkinGrave";
import DaMustardDog from "./pages/Works/DaMustardDog";
import DaShadesDog from "./pages/Works/DaShadesDog";
import VarsityPumpkinHead from "./pages/Works/VarsityPumpkinHead";
import RubberDuckie from "./pages/Works/RubberDuckie";
import SouthSideDog from "./pages/Works/SouthSideDog";
import WinningUglyDog from "./pages/Works/WinningUglyDog";
import TheHorns from "./pages/Works/TheHorns";
import Chicaghost from "./pages/Works/Chicaghost";
import DaChicagoHockeyGhost from './pages/Works/DaChicagoHockeyGhost';
import AllAmericanDog from './pages/Works/AllAmericanDog';

//News
import _NewsLanding from "./pages/News/_NewsLanding";

//Links page
import LinksPage from "./pages/LinksPage";

//404
import Page404 from "./pages/Page404";

const App = () => (
  <Router>
    <Wrapper>
      <Navigation />
      <ContentWrapper>
        <ScrollMemory />
        <Switch>

          {/* Core Site */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shops" component={Shops} />

          {/* Works */}
          <Route exact path="/works/" component={_WorksLanding} />
          <Route exact path={DangerHuskie[0].link} component={PencilBear} />
          <Route exact path={DangerHuskie[1].link} component={AnnoyedYeti} />
          <Route exact path={DangerHuskie[2].link} component={AnnoyedSasquatch} />
          <Route exact path={DangerHuskie[3].link} component={VarsityPumpkin} />
          <Route exact path={DangerHuskie[4].link} component={HappyRainbow} />
          <Route exact path={DangerHuskie[5].link} component={JoyousRainbow} />
          <Route exact path={DangerHuskie[6].link} component={Calendar2020} />
          <Route exact path={DangerHuskie[7].link} component={BlackElectricCat} />
          <Route exact path={DangerHuskie[8].link} component={WhiteElectricCat} />
          <Route exact path={DangerHuskie[9].link} component={ChicagoDogFlag} />
          <Route exact path={DangerHuskie[10].link} component={PencilBearFlag} />
          <Route exact path={DangerHuskie[11].link} component={OversizedFoamHat} />
          <Route exact path={DangerHuskie[12].link} component={CloudHug} />
          <Route exact path={DangerHuskie[13].link} component={UnhappyRainbow} />
          <Route exact path={DangerHuskie[14].link} component={AngryRainbow} />
          <Route exact path={DangerHuskie[15].link} component={DHLogoWText} />
          <Route exact path={DangerHuskie[16].link} component={DangerHuskieHead} />
          <Route exact path={DangerHuskie[17].link} component={DHHardcoreLogo} />
          <Route exact path={DangerHuskie[18].link} component={FightingBurger} />
          <Route exact path={DangerHuskie[19].link} component={VarsityPumpkinCreepin} />
          <Route exact path={DangerHuskie[20].link} component={VarsityPumpkinGrave} />
          <Route exact path={DangerHuskie[21].link} component={DaMustardDog} />
          <Route exact path={DangerHuskie[22].link} component={DaShadesDog} />
          <Route exact path={DangerHuskie[23].link} component={VarsityPumpkinHead} />
          <Route exact path={DangerHuskie[24].link} component={RubberDuckie} />
          <Route exact path={DangerHuskie[25].link} component={SouthSideDog} />
          <Route exact path={DangerHuskie[26].link} component={WinningUglyDog} />
          <Route exact path={DangerHuskie[27].link} component={TheHorns} />
          <Route exact path={DangerHuskie[28].link} component={Chicaghost} />
          <Route exact path={DangerHuskie[29].link} component={AllAmericanDog} />
          <Route exact path={DangerHuskie[30].link} component={DaChicagoHockeyGhost} />

          {/* News Page */}
          <Route exact path="/news" component={_NewsLanding} />

          {/* Contact Page */}
          <Route exact path="/contact" component={Contact} />

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

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
