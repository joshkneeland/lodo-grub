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
                delay: 0.5
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
                duration: 0.25
            },
        }
    };

    const resultsVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            transition: {
                duration: 0.25,
                delay: 0.75,
                delayChildren: 1.25,
                staggerChildren: 0.75
            },
        },
        out: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0
            },
        },
        transition: {
            duration: 0,
            ease: "easeInOut"
        }
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="restaurant-list">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={resultsVariants}>
                <h2>Here are <strong> {state.filteredRestaurants.length} </strong> restaurants that match your criteria:</h2>
                <ul>
                    {state.filteredRestaurants.map(rest => {
                        return <div key={rest.name}>
                            <li key={rest.name}><strong>{rest.name}</strong></li>
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
        </motion.div>
    )
}

export default RestaurantList;