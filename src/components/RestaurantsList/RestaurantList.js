import React from 'react';
import './restaurantList.scss';
import { MyContext } from '../../App.js';

const RestaurantList = () => {
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