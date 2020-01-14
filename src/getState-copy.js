export default function getState() {
    return {
        filteredRestaurants: [],
        initialLoad: false,
        styleFilter: ['Casual Dining', 'Elegant Dining', 'Fast Food', 'Food Truck'],
        hoursFilter: [],
        timeToEatFilter: [],
        allRestaurants: [
            {
                name: 'Citizen Rail',
                restaurantStyle: 'Casual Dining',
                restaurantEthnicity: 'American',
                priceIndex: 2,
                speedIndex: 2,
                healthinessIndex: 3,
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDelivery: true,
                hasDietaryRestrictions: true,
                address: '1899 16th St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Fogo de Chao Brazilian Steakhouse',
                restaurantStyle: 'Elegant Dining',
                restaurantEthnicity: 'Brazilian',
                priceIndex: 3,
                speedIndex: 2,
                healthinessIndex: 2,
                hoursOfOperation: [
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDelivery: false,
                hasDietaryRestrictions: true,
                address: '1513 Wynkoop Street',
                city: 'Denver',
                state: 'CO',
                zipCode: ''
            },
            {
                name: 'Taco Bell',
                restaurantStyle: 'Fast Food',
                restaurantEthnicity: 'Mexican',
                priceIndex: 1,
                speedIndex: 1,
                healthinessIndex: 1,
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner',
                    'Late Night',
                ],
                hasAlcohol: false,
                hasReservations: true,
                hasDelivery: true,
                hasDietaryRestrictions: true,
                address: '634 16th St Mall',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Urban Farmer',
                restaurantStyle: 'Elegant Dining',
                restaurantEthnicity: 'American',
                priceIndex: 3,
                speedIndex: 2,
                healthinessIndex: 2,
                hoursOfOperation: [
                    'Breakfast',
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDelivery: false,
                hasDietaryRestrictions: true,
                address: '1659 Wazee St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            },
            {
                name: 'Venice Ristorante & Wine Bar',
                restaurantStyle: 'Elegant Dining',
                restaurantEthnicity: 'Italian',
                priceIndex: 2,
                speedIndex: 3,
                healthinessIndex: 2,
                hoursOfOperation: [
                    'Lunch',
                    'Dinner'
                ],
                hasAlcohol: true,
                hasReservations: true,
                hasDelivery: true,
                hasDietaryRestrictions: true,
                address: '1700 Wynkoop St',
                city: 'Denver',
                state: 'CO',
                zipCode: '80202'
            }
        ]
    }
};