import produce from 'immer';

function restaurantReducer(state, action) {

    let newFilteredRestaurants = Array.from(state.filteredRestaurants);

    // 

    switch (action.type) {
        case 'filter_style':
            // draft[action.fieldName] = action.payload;
            // draft.name = 'Test Name';
            // console.log('filter_style hit:', action);
            // console.log('draft: ', draft);
            // console.log('state: ', JSON.stringify(state));
            // console.log('allRestaurants[0].name: ', state.allRestaurants[0].name);

            // loop over allRest and if style matches then push to filteredRestaurants

            for (let i in state.allRestaurants) {

                let matchedStyle = action.payload.indexOf(state.allRestaurants[i].restaurantStyle) > -1;

                let hoursOptMatched = false;
                if (state.hoursFilter.length) {

                    for (let k in state.allRestaurants[i].hoursOfOperation) {
                        if (state.hoursFilter.indexOf(state.allRestaurants[i].hoursOfOperation[k]) > -1) {
                            hoursOptMatched = true;
                        }
                    }
                } else {
                    hoursOptMatched = true;
                }


                if (matchedStyle && hoursOptMatched) {
                    console.log('matched style:', state.allRestaurants[i].restaurantStyle);
                    // and it's not already in there
                    // search the whole array and once we've determined that no results match then we add
                    let matched = false;
                    for (let j in newFilteredRestaurants) {
                        if (newFilteredRestaurants[j].name === state.allRestaurants[i].name) {
                            matched = true;
                        }
                    }

                    if (!matched) {
                        newFilteredRestaurants.push(state.allRestaurants[i]);
                    }

                } else {
                    // remove it from the array
                    // 
                    for (let j in newFilteredRestaurants) {
                        if (newFilteredRestaurants[j].name === state.allRestaurants[i].name) {
                            console.log("would splice")
                            newFilteredRestaurants.splice(j);
                        }
                    }
                }
            }

            // console.log('action: ', action);

            return {
                ...state,
                filteredRestaurants: newFilteredRestaurants,
                styleFilter: action.payload
            };

            break;

        case 'filter_hours':
            // draft.error = '';
            // draft.isLoading = true;
            console.log('hoursOfOperation:', state.allRestaurants[0].hoursOfOperation);

            for (let i in state.allRestaurants) {
                // is one the resturants hours options in the selected options
                let matchedStyle = state.styleFilter.indexOf(state.allRestaurants[i].restaurantStyle) > -1;

                let hoursOptMatched = false;
                for (let k in state.allRestaurants[i].hoursOfOperation) {
                    if (action.payload.indexOf(state.allRestaurants[i].hoursOfOperation[k]) > -1) {
                        hoursOptMatched = true;
                    }
                }

                if (matchedStyle && hoursOptMatched) {
                    console.log('matched hours:', state.allRestaurants[i].hoursOfOperation);
                    // and it's not already in there
                    // search the whole array and once we've determined that no results match then we add
                    let matched = false;
                    for (let j in newFilteredRestaurants) {
                        if (newFilteredRestaurants[j].name === state.allRestaurants[i].name) {
                            matched = true;
                        }
                    }

                    if (!matched) {
                        newFilteredRestaurants.push(state.allRestaurants[i]);
                    }

                } else {
                    // remove it from the array
                    // 
                    for (let j in newFilteredRestaurants) {
                        if (newFilteredRestaurants[j].name === state.allRestaurants[i].name) {
                            console.log("would splice")
                            newFilteredRestaurants.splice(j);
                        }
                    }
                }
            }

            // console.log('action: ', action);

            return {
                ...state,
                filteredRestaurants: newFilteredRestaurants,
                hoursFilter: action.payload
            };

            break;

        case 'filter_time':
            // draft.isLoggedIn = true;
            // draft.isLoading = false;
            // draft.username = '';
            // draft.password = '';
            console.log('filter_time hit');
            // console.log('draft: ', draft);
            console.log('state: ', state);
            console.log('action: ', action);
            return {
                ...state
            };
            break;
        default:
            return;
    }
}

const curriedRestaurantReducer = produce(restaurantReducer);

export default curriedRestaurantReducer;