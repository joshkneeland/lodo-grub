// REACT SETUP
import React, { useReducer, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

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
  const location = useLocation();
  const performance = window.performance;

  useEffect(() => {
    // show filtered results on load
    if (!state.initialLoad) {
      state.initialLoad = true
      dispatch();
    }

    if (location.pathname === '/questions') {
      setTimeout(function () {
        dispatch({ type: 'RESET_RESTAURANT_LIST' });
      }, 500);
    }

    try {
      // New API
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }

    // Clear sessionStorage on page refresh
    if (performance && performance.navigation.type === 1) {
      sessionStorage.clear();
    }
  }, [state.initialLoad, location, performance]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname} initial={false}>
          <Route path='/' exact component={SiteHeader} activeClassName="active-route" />
          <Route path='/questions' exact component={QuestionList} activeClassName="active-route" />
          <Route path='/restaurants' exact component={RestaurantList} activeClassName="active-route" />
          <Redirect from='*' to='/' />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default () => {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
};
