import produce from 'immer';

function restaurantReducer(state, action) {

    // Create an array from the list of restaurants
    // This is necessary, because state.filteredRestaurants is an object
    let newFilteredRestaurants = Array.from(state.allRestaurants);

    // loop over allRest and if style matches then push to filteredRestaurants

    for (let i in state.allRestaurants) {

        // 1 - RESTAURANT STYLE OPTIONS - DONE

        // Default flag
        let styleMatched = false;
        // Check if user selected any style filters
        if (state.styleFilter.length) {
            // Checks the state 
            styleMatched = state.styleFilter.indexOf(state.allRestaurants[i].restaurantStyle) > -1;
        } else {
            styleMatched = true;
        }

        // 2 - HOURS OPTIONS - DONE

        let hoursMatched = false;
        if (state.hoursFilter.length) {
            for (let k in state.allRestaurants[i].hoursOfOperation) {
                if (state.hoursFilter.indexOf(state.allRestaurants[i].hoursOfOperation[k]) > -1) {
                    hoursMatched = true;
                }
            }
        } else {
            hoursMatched = true;
        }

        // 3 - TIME TO EAT OPTIONS - DONE

        let timeToEatMatched = false;
        if (state.timeToEatFilter.length) {
            timeToEatMatched = state.timeToEatFilter.indexOf(state.allRestaurants[i].timeToEatIndex) > -1;
            if (state.timeToEatFilter[0] === 'No Preference') {
                timeToEatMatched = true;
            }
        } else {
            timeToEatMatched = true;
        }

        // 4 - MEAL COST OPTIONS - NOT DONE

        // Default flag
        let mealCostMatched = false;
        // Check if user selected any style filters
        if (state.mealCostFilter.length) {
            // Checks the state 
            mealCostMatched = state.mealCostFilter.indexOf(state.allRestaurants[i].mealCost) > -1;
            if (state.mealCostFilter[0] === 'No Preference') {
                mealCostMatched = true;
            }
        } else {
            mealCostMatched = true;
        }

        // 5 - HEALTHINESS - NOT DONE

        // Default flag
        let healthinessMatched = false;
        // Check if user selected any style filters
        if (state.healthinessFilter.length) {
            // Checks the state 
            healthinessMatched = state.healthinessFilter.indexOf(state.allRestaurants[i].mealHealthiness) > -1;
        } else {
            healthinessMatched = true;
        }

        // 6 - ETHNICITY - NOT DONE

        // Default flag
        let ethnicityMatched = false;
        // Check if user selected any style filters
        if (state.ethnicityFilter.length) {
            // Checks the state 
            ethnicityMatched = state.ethnicityFilter.indexOf(state.allRestaurants[i].restaurantEthnicity) > -1;
        } else {
            ethnicityMatched = true;
        }

        // 7 - SERVE ALCOHOL OPTIONS - NOT DONE

        let serveAlcoholMatched = false;
        if (state.serveAlcoholFilter.length) {
            serveAlcoholMatched = state.serveAlcoholFilter.indexOf(String(state.allRestaurants[i].hasAlcohol)) > -1;
            if (state.serveAlcoholFilter[0] === 'No Preference') {
                serveAlcoholMatched = true;
            }
        } else {
            serveAlcoholMatched = true;
        }

        // 8 - RESERVATIONS OPTIONS - NOT DONE

        let reservationsMatched = false;
        if (state.reservationsFilter.length) {
            reservationsMatched = state.reservationsFilter.indexOf(String(state.allRestaurants[i].hasReservations)) > -1;
            if (state.reservationsFilter[0] === 'No Preference') {
                reservationsMatched = true;
            }
        } else {
            reservationsMatched = true;
        }

        // 9 - DELIVERY/CATERING OPTIONS - NOT DONE

        let deliveryCateringMatched = false;
        if (state.deliveryCateringFilter.length) {
            deliveryCateringMatched = state.deliveryCateringFilter.indexOf(String(state.allRestaurants[i].hasDeliveryCatering)) > -1;
            if (state.deliveryCateringFilter[0] === 'No Preference') {
                deliveryCateringMatched = true;
            }
        } else {
            deliveryCateringMatched = true;
        }

        // 10 - DEITARY RESTRICTIONS OPTIONS - NOT DONE

        let dietaryRestrictionsMatched = false;
        if (state.dietaryRestrictionsFilter.length) {
            dietaryRestrictionsMatched = state.dietaryRestrictionsFilter.indexOf(String(state.allRestaurants[i].hasDietaryRestrictions)) > -1;
            if (state.dietaryRestrictionsFilter[0] === 'No Preference') {
                dietaryRestrictionsMatched = true;
            }
        } else {
            dietaryRestrictionsMatched = true;
        }

        // ALL MATCHED STYLES OPTIONS
        if (styleMatched &&
            hoursMatched &&
            timeToEatMatched &&
            mealCostMatched &&
            healthinessMatched &&
            ethnicityMatched &&
            serveAlcoholMatched &&
            reservationsMatched &&
            deliveryCateringMatched &&
            dietaryRestrictionsMatched) { // && timeMatch && blah
            // and it's not already in there
            // search the whole array and once we've determined that no results match then we add
            let matched = false;
            for (let j in newFilteredRestaurants) {
                if (newFilteredRestaurants[j].name === state.allRestaurants[i].name) {
                    matched = true;
                }
            }

            // If NOT matched, add the restaurant to the array
            if (!matched) {
                newFilteredRestaurants.push(state.allRestaurants[i]);
            }

        } else {
            // If the item is matched
            // remove it from the array

            for (let j in newFilteredRestaurants) {
                if (newFilteredRestaurants[j].name === state.allRestaurants[i].name) {
                    newFilteredRestaurants.splice(j, 1);
                }
            }
        }
    }

    if (action && action.type === 'RESET_RESTAURANT_LIST') {
        newFilteredRestaurants = Array.from(state.allRestaurants);
    }

    return {
        ...state,
        filteredRestaurants: newFilteredRestaurants
    };
}

const curriedRestaurantReducer = produce(restaurantReducer);

export default curriedRestaurantReducer;