import React from 'react';
import '../scss/questionsList.scss';

// USER INTERFACE
import { Checkbox, Radio } from 'antd';

// CONTEXT
import { MyContext } from '../App.js';

function QuestionsList() {

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

    return (
        <div className="questions">
            <p>Question 1: What style of restaurant is this?</p>
            <Checkbox.Group options={foodOptions} onChange={(e) => {
                state.styleFilter = e
                dispatch()
            }} />
            <p>Question 2: What kind of lunch options are offered?</p>
            <Checkbox.Group options={foodOptionsTwo} onChange={(e) => {
                state.hoursFilter = e
                dispatch()
            }} />
            <p>Question 3: How much time do you have to eat?</p>

            <Radio.Group options={foodOptionsThree} onChange={(e) => {
                state.timeToEatFilter = [];
                state.timeToEatFilter.push(e.target.value);
                dispatch()
            }}>

            </Radio.Group>
            <p>Question 4: How expensive of a meal are you looking for?</p>
            <Checkbox.Group options={foodOptionsFour} onChange={(e) => {
                state.mealCostFilter = e
                dispatch()
            }} />
            <p>Question 5: How healthy of a meal are you looking for?</p>
            <Checkbox.Group options={foodOptionsFive} onChange={(e) => {
                state.healthinessFilter = e
                dispatch()
            }} />
            <p>Question 6: What kind of ethnicity of cuisine are you looking to?</p>
            <Checkbox.Group options={foodOptionsSix} onChange={(e) => {
                state.ethnicityFilter = e
                dispatch()
            }} />
            <p>Question 7: Does this restaurant serve alcohol?</p>
            <Radio.Group options={foodOptionsSeven} onChange={(e) => {
                state.serveAlcoholFilter = [];
                state.serveAlcoholFilter.push(String(e.target.value));
                dispatch()
            }}>
            </Radio.Group>
            <p>Question 8: Does this restaurant take reservations?</p>
            <Radio.Group options={foodOptionsEight} onChange={(e) => {
                state.reservationsFilter = [];
                state.reservationsFilter.push(String(e.target.value));
                dispatch()
            }}>
            </Radio.Group>
            <p>Question 9: Does this restaurant offer delivery or catering services?</p>
            <Radio.Group options={foodOptionsNine} onChange={(e) => {
                state.deliveryCateringFilter = [];
                state.deliveryCateringFilter.push(String(e.target.value));
                dispatch()
            }}>
            </Radio.Group>
            <p>Question 10: Does this restaurant have dietary restrictions (ex: Gluten Free, Vegan)?</p>
            <Radio.Group options={foodOptionsTen} onChange={(e) => {
                state.dietaryRestrictionsFilter = [];
                state.dietaryRestrictionsFilter.push(String(e.target.value));
                dispatch()
            }}>
            </Radio.Group>
        </div>
    )
}

export default Questions;