import React from 'react';
import '../scss/restaurantList.scss';

// CONTEXT
import { MyContext } from '../App.js';

function RestaurantList() {
    const { state } = React.useContext(MyContext);

    return (
        <div className="restaurantList">
            restaurantList.js
            <ul>
                Filtered Restaurants: {state.filteredRestaurants.map(rest => {
                    return <li key={rest.name}>{rest.name}</li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantList;