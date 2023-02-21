import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import {Careers} from "./components/Pages/Careers";
import {FAQ} from "./components/Pages/FAQ";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <div className="pages">
          <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/Careers" component={Careers} />
            <Route path="/FAQ" component={FAQ} />
          </Switch>
          </ScrollToTop>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
