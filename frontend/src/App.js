import './css/home.css';
import './css/navigation.css';
import './css/common.css';
import Navigation from './components/navigation/Navigation';
import SocialTabs from './components/navigation/SocialTabs';
import Schedule from './components/pages/Schedule';
import Pokemon from './components/pages/Pokemon';

import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SocialTabs} />

          <Route
            exact
            path="/schedule"
            render={() => {
              return <Schedule></Schedule>;
            }}
          />

          <Route
            exact
            path="/pokemon"
            render={() => {
              return <Pokemon></Pokemon>;
            }}
          />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
