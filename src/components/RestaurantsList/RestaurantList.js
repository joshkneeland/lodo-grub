import React from 'react';
import './restaurantList.scss';
import { MyContext } from '../../App.js';
import { NavLink } from 'react-router-dom';

const RestaurantList = () => {
    const { state } = React.useContext(MyContext);

    return (
        <div className="restaurant-list">
            <ul>
                Filtered Restaurants: {state.filteredRestaurants.map(rest => {
                    return <div key={rest.name}>
                        <li key={rest.name}>{rest.name}</li>
                        <li key={rest.restaurantStyle}>{rest.restaurantStyle}</li>
                        <li key={rest.restaurantEthnicity}>{rest.restaurantEthnicity}</li>
                        <li key={rest.mealCost}>{rest.mealCost}</li>
                        <li key={rest.mealHealthiness}>{rest.mealHealthiness}</li>
                        <li key={rest.address}>{rest.address}</li>
                        <li key={rest.city}>{rest.city}, {rest.state} {rest.zipCode}</li>
                        <hr></hr>
                    </div>
                })}
            </ul>
            <NavLink exact to="/questions" activeClassName="active">Back To Questions</NavLink>
        </div>
    )
}

export default RestaurantList;