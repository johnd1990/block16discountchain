// Starter code with customer objects
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

// Function to calculate the total cost with discounts
function calculateGrandTotal(customer) {
    // Task 1: Calculate the refill total
    const refillTotal = customer.pricePerRefill * customer.refills;

    // Task 2: Apply subscription discount if applicable
    let grandTotal = refillTotal;
    if (customer.subscription) {
        grandTotal *= 0.75;
    }

    // Task 3: Apply coupon discount if applicable
    if (customer.coupon) {
        grandTotal -= 10;
    }

    // Return the final grand total
    return `Your grand total is $${grandTotal}.`;
}

// Test the function with each customer object
console.log(calculateGrandTotal(timmy));
console.log(calculateGrandTotal(sarah));
console.log(calculateGrandTotal(rocky));
