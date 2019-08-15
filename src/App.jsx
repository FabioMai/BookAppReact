import React from "react";
import "./App.css";
import Browse from "./pages/Browse";
import Friends from "./pages/Friends";
import Library from "./pages/Library";
import Details from "./pages/Details";
import TabBar from "./components/TabBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={Browse} />
          <Route exact strict path="/library" component={Library} />
          <Route
            exact
            path="/books/:id"
            render={({ match }) => <Details id={match.params.id} />}
          />
          <Route exact strict path="/browse" component={Browse} />
          <Route exact strict path="/friends" component={Friends} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
      <TabBar />
    </div>
  );
}

export default App;
