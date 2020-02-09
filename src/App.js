// REACT SETUP
import React, { useReducer, useEffect } from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
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

  useEffect(() => {
    // show filtered results on load
    if (!state.initialLoad) {
      state.initialLoad = true
      dispatch();
    }

    console.log(location);
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
  }, [state.initialLoad, location]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}

function App() {

  // const { state } = React.useContext(MyContext);

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname} initial={false}>
          <Route path='/' exact component={SiteHeader} activeClassName="active-route" />
          <Route path='/questions' exact component={QuestionList} activeClassName="active-route" />
          <Route path='/restaurants' exact component={RestaurantList} activeClassName="active-route" />
        </Switch>
      </AnimatePresence>
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
