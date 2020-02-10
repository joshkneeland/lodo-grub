import React from 'react';
import './questionList.scss';
import { Checkbox, Radio } from 'antd';
import { MyContext } from '../../App.js';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function QuestionList() {

    const { state, dispatch } = React.useContext(MyContext);

    const foodOptions = [
        { label: 'Casual Dining', value: 'Casual Dining' },
        { label: 'Elegant Dining', value: 'Elegant Dining' },
        { label: 'Fast Food', value: 'Fast Food' },
        { label: 'Food Truck', value: 'Food Truck' }
    ];

    const foodOptionsTwo = [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Late  Night', value: 'Late Night' }
    ];

    const foodOptionsThree = [
        { label: '0 - 30 minutes', value: '0 - 30 minutes' },
        { label: '30 - 60 minutes', value: '30 - 60 minutes' },
        { label: '60+ minutes', value: '60+ minutes' },
        { label: 'No Preference', value: 'No Preference' },
    ];

    const foodOptionsFour = [
        { label: 'Cheap', value: 'Cheap' },
        { label: 'Affordable', value: 'Affordable' },
        { label: 'Expensive', value: 'Expensive' }
    ];

    const foodOptionsFive = [
        { label: 'Not Healthy', value: 'Not Healthy' },
        { label: 'Somewhat Healthy', value: 'Somewhat Healthy' },
        { label: 'Very Healthy', value: 'Very Healthy' }
    ];

    const foodOptionsSix = [
        { label: 'American', value: 'American' },
        { label: 'Latin', value: 'Latin' },
        { label: 'Asian', value: 'Asian' },
        { label: 'European', value: 'European' },
        { label: 'Other', value: 'Other' }
    ];

    const foodOptionsSeven = [
        { label: 'Yes', value: true },
        { label: 'No ', value: false },
        { label: 'No Preference', value: 'No Preference' }
    ];

    const foodOptionsEight = [
        { label: 'Yes', value: true },
        { label: 'No ', value: false },
        { label: 'No Preference', value: 'No Preference' }
    ];

    const foodOptionsNine = [
        { label: 'Yes', value: true },
        { label: 'No ', value: false },
        { label: 'No Preference', value: 'No Preference' }
    ];

    const foodOptionsTen = [
        { label: 'Yes', value: true },
        { label: 'No ', value: false },
        { label: 'No Preference', value: 'No Preference' }
    ];

    const pageVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.25,
                delay: 0.5
            },
        },
        out: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.25,
                display: "none"
            },
        }
    };

    const questionVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.25,
                delay: 0.625
            },
        },
        out: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.25
            },
        },
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    };

    // useEffect(() => {
    //     let inputs = document.getElementsByTagName('input');
    //     for (let i = 0; i < inputs.length; i++) {
    //         console.log('inputs[i]: ', inputs[i]);
    //         console.log('inputs[i].value: ', inputs[i].value);
    //         console.log('e: ', e);
    //         window.sessionStorage.setItem(inputs[i].value, inputs[i].value);
    //     }
    //     console.log('window.sessionStorage: ', window.sessionStorage);
    // });

    // useEffect(() => {
    //     if (location.pathname === '/questions') {
    //         console.log('location.pathname: ', location.pathname);
    //         // dispatch()
    //     }
    // });

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="question-list">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={questionVariants}>
                <h2>Restaurant Preferences:</h2>
                <h4>What style of restaurant is this?</h4>
                <Checkbox.Group options={foodOptions} onChange={(e) => {
                    state.styleFilter = e
                    dispatch()
                }} />
                {/* <legend>What style of restaurant is this?</legend>
                <input type="checkbox" name="favorite_pet" value="Cats" />Cats<br />
                <input type="checkbox" name="favorite_pet" value="Dogs" />Dogs<br />
                <input type="checkbox" name="favorite_pet" value="Birds" />Birds<br /> */}
                <hr></hr>
                <h4>What kind of lunch options are offered?</h4>
                <Checkbox.Group options={foodOptionsTwo} onChange={(e) => {
                    state.hoursFilter = e
                    dispatch()
                }} />
                <hr></hr>
                <h4>How much time do you have to eat?</h4>
                <Radio.Group options={foodOptionsThree} onChange={(e) => {
                    state.timeToEatFilter = [];
                    state.timeToEatFilter.push(e.target.value);
                    dispatch()
                }}>
                </Radio.Group>
                <hr></hr>
                <h4>How expensive of a meal are you looking for?</h4>
                <Checkbox.Group options={foodOptionsFour} onChange={(e) => {
                    state.mealCostFilter = e
                    dispatch()
                }} />
                <hr></hr>
                <h4>How healthy of a meal are you looking for?</h4>
                <Checkbox.Group options={foodOptionsFive} onChange={(e) => {
                    state.healthinessFilter = e
                    dispatch()
                }} />
                <hr></hr>
                <h4>What kind of ethnicity of cuisine are you looking to?</h4>
                <Checkbox.Group options={foodOptionsSix} onChange={(e) => {
                    state.ethnicityFilter = e
                    dispatch()
                }} />
                <hr></hr>
                <h4>Does this restaurant serve alcohol?</h4>
                <Radio.Group options={foodOptionsSeven} onChange={(e) => {
                    state.serveAlcoholFilter = [];
                    state.serveAlcoholFilter.push(String(e.target.value));
                    dispatch()
                }}>
                </Radio.Group>
                <hr></hr>
                <h4>Does this restaurant take reservations?</h4>
                <Radio.Group options={foodOptionsEight} onChange={(e) => {
                    state.reservationsFilter = [];
                    state.reservationsFilter.push(String(e.target.value));
                    dispatch()
                }}>
                </Radio.Group>
                <hr></hr>
                <h4>Does this restaurant offer delivery or catering services?</h4>
                <Radio.Group options={foodOptionsNine} onChange={(e) => {
                    state.deliveryCateringFilter = [];
                    state.deliveryCateringFilter.push(String(e.target.value));
                    dispatch()
                }}>
                </Radio.Group>
                <hr></hr>
                <h4>Does this restaurant have dietary restrictions (ex: Gluten Free, Vegan)?</h4>
                <Radio.Group options={foodOptionsTen} onChange={(e) => {
                    state.dietaryRestrictionsFilter = [];
                    state.dietaryRestrictionsFilter.push(String(e.target.value));
                    dispatch()
                }}>
                </Radio.Group>
                <p>
                    <NavLink exact to="/restaurants" activeClassName="active">Search Available Restaurants</NavLink>
                </p>
            </motion.div>
        </motion.div>
    )
}

export default QuestionList;