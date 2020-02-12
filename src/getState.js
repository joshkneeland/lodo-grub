export default function getState() {
    return {
        filteredRestaurants: [],
        initialLoad: false,
        resetRestaurantList: false,
        styleFilter: [],
        hoursFilter: [],
        timeToEatFilter: [],
        mealCostFilter: [],
        healthinessFilter: [],
        ethnicityFilter: [],
        serveAlcoholFilter: [],
        reservationsFilter: [],
        deliveryCateringFilter: [],
        dietaryRestrictionsFilter: [],
        allRestaurants: [
            {
                name: 'Anise Modern Vietnamese Eatery',
                restaurantStyle: 'Casual Dining',
                restaurantEthnicity: 'Asian',
                timeToEatIndex: '30 - 60 minutes',
                mealCost: 'Affordable',
                mealHealthiness: 'Somewhat Healthy',
                hoursOfOperation: [
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDeliveryCatering: true,
                hasDietaryRestrictions: true,
                address: '865 N Lincoln St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80203'
            },
            {
                name: 'Armenian Shish Kabob',
                restaurantStyle: 'Food Truck',
                restaurantEthnicity: 'Other',
                timeToEatIndex: '0 - 30 minutes',
                mealCost: 'Affordable',
                mealHealthiness: 'Somewhat Healthy',
                hoursOfOperation: [
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: false,
                hasReservations: false,
                hasDeliveryCatering: false,
                hasDietaryRestrictions: false,
                address: '16th St Mall between Market St & Larimer St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Avelina',
                restaurantStyle: 'Casual Dining',
                restaurantEthnicity: 'American',
                timeToEatIndex: '30 - 60 minutes',
                mealCost: 'Affordable',
                mealHealthiness: 'Somewhat Healthy',
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDeliveryCatering: true,
                hasDietaryRestrictions: true,
                address: '1550 17th Street',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Brad\'s Pit BBQ',
                restaurantStyle: 'Food Truck',
                restaurantEthnicity: 'American',
                timeToEatIndex: '0 - 30 minutes',
                mealCost: 'Affordable',
                mealHealthiness: 'Cheap',
                hoursOfOperation: [
                    'Lunch',
                    'Dinner',
                    'Late Night'
                ],
                hasAlcohol: false,
                hasReservations: false,
                hasDeliveryCatering: true,
                hasDietaryRestrictions: false,
                address: 'N/A',
                city: 'Littleton',
                state: 'CO',
                zipCode: '80123'
            },
            {
                name: 'Chick-fil-A',
                restaurantStyle: 'Fast Food',
                restaurantEthnicity: 'American',
                timeToEatIndex: '0 - 30 minutes',
                mealCost: 'Cheap',
                mealHealthiness: 'Not Healthy',
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: false,
                hasReservations: false,
                hasDeliveryCatering: false,
                hasDietaryRestrictions: false,
                address: '3725 E Colfax Ave',
                city: 'Denver',
                state: 'CO',
                zipCode: '80206'
            },
            {
                name: 'Citizen Rail',
                restaurantStyle: 'Casual Dining',
                restaurantEthnicity: 'American',
                timeToEatIndex: '30 - 60 minutes',
                mealCost: 'Affordable',
                mealHealthiness: 'Somewhat Healthy',
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDeliveryCatering: true,
                hasDietaryRestrictions: false,
                address: '1899 16th St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Fogo de Chao Brazilian Steakhouse',
                restaurantStyle: 'Elegant Dining',
                restaurantEthnicity: 'Latin',
                mealCost: 'Expensive',
                timeToEatIndex: '60+ minutes',
                mealHealthiness: 'Somewhat Healthy',
                hoursOfOperation: [
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDeliveryCatering: false,
                hasDietaryRestrictions: true,
                address: '1513 Wynkoop Street',
                city: 'Denver',
                state: 'CO',
                zipCode: ''
            },
            {
                name: 'Taco Bell',
                restaurantStyle: 'Fast Food',
                restaurantEthnicity: 'Latin',
                mealCost: 'Cheap',
                timeToEatIndex: '0 - 30 minutes',
                mealHealthiness: 'Not Healthy',
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner',
                    'Late Night',
                ],
                hasAlcohol: false,
                hasReservations: false,
                hasDeliveryCatering: true,
                hasDietaryRestrictions: false,
                address: '634 16th St Mall',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Urban Farmer',
                restaurantStyle: 'Elegant Dining',
                restaurantEthnicity: 'American',
                mealCost: 'Expensive',
                timeToEatIndex: '30 - 60 minutes',
                mealHealthiness: 'Very Healthy',
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDeliveryCatering: false,
                hasDietaryRestrictions: true,
                address: '1659 Wazee St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Venice Ristorante & Wine Bar',
                restaurantStyle: 'Elegant Dining',
                restaurantEthnicity: 'European',
                mealCost: 'Affordable',
                timeToEatIndex: '60+ minutes',
                mealHealthiness: 'Somewhat Healthy',
                hoursOfOperation: [
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDeliveryCatering: true,
                hasDietaryRestrictions: true,
                address: '1700 Wynkoop St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            }
        ]
    }
};