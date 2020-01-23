// REACT SETUP
import React, { useReducer, useEffect } from 'react';
import './App.css';

// COMPONENTS

import SiteHeader from './components/SiteHeader.js/index.js';
import QuestionsList from './components/QuestionsList.js/index.js.js';
import RestaurantList from './components/RestaurantList.js';

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
      dispatch()
    }
  });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <QuestionsList />
      <RestaurantList />
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
