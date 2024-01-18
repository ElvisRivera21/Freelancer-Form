// Array of freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 }
];

console.log(freelancers);

// Function to calculate average starting price
document.addEventListener("DOMContentLoaded", function () {
function calculateAverageStartingPrice() {
    const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averageStartingPrice = totalStartingPrice / freelancers.length;
    return averageStartingPrice.toFixed(2);
}

// Function to update the message for average starting price
function updateAveragePriceMessage() {
    const averagePriceMessage = document.getElementById("average-price-message");
    const averageStartingPrice = calculateAverageStartingPrice();
    averagePriceMessage.textContent = `Average Starting Price: $${averageStartingPrice}`;
}

// Function to render the list of freelancers
function renderFreelancers() {
    const freelancersContainer = document.getElementById("freelancersContainer");

    // Clear existing content in container
    freelancersContainer.innerHTML = "";

    // Loop through freelancers and create HTML elements
    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement("div");
        freelancerElement.innerHTML = `
            <p>Name: ${freelancer.name}</p>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: ${freelancer.startingPrice}</p>
            <hr>
        `;

        // Append the created element to the container
        freelancersContainer.appendChild(freelancerElement);
    });
}

// Call the function to render initial freelancers
renderFreelancers();

// Call the function to update the average price message
    updateAveragePriceMessage();
});