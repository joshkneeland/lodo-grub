import React from 'react';
import './restaurantList.scss';
import { MyContext } from '../../App.js';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const RestaurantList = () => {
    const { state } = React.useContext(MyContext);

    const pageVariants = {
        initial: {
            opacity: 0,
            transition: {
                delay: 1
            }
        },
        in: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.5
            },
        },
        out: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.5
            },
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="restaurant-list">
            <h2>Filtered Restaurants:</h2>
            <ul>
                {state.filteredRestaurants.map(rest => {
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
            {
                state.filteredRestaurants.length === 0 &&
                <p>There are no restaurants that meet your specification. Please try again.</p>
            }
            <p>
                <NavLink exact to="/questions" activeClassName="active">Back To Questions</NavLink>
            </p>
        </motion.div>
    )
}

export default RestaurantList;