// REACT SETUP
import React, { useReducer, useEffect } from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// COMPONENTS

import SiteHeader from './components/SiteHeader/SiteHeader.js';
import QuestionList from './components/QuestionList/QuestionList.js';
import RestaurantList from './components/RestaurantsList/RestaurantList.js';

// INITIAL STATE
import getState from './getState.js';

// REDUCER
import curriedRestaurantReducer from './reducers/restaurantReducer.js'

// USECONTEXT
export const MyContext = React.createContext();

function MyProvider({ children }) {
  const initialState = getState();
  const [state, dispatch] = useReducer(curriedRestaurantReducer, initialState);

  useEffect(() => {
    // show filtered results on load
    if (!state.initialLoad) {
      state.initialLoad = true
      dispatch();
    }
  });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}

function App() {

  const { state } = React.useContext(MyContext);

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade">
          <Switch>
            <Route exact path='/' component={SiteHeader} />
            <Route exact path='/questions' component={QuestionList} />
            <Route exact path='/restaurants' component={RestaurantList} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

// export default App;

export default () => {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
};
