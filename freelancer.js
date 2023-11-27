//Freelancers Array Containing Workers

const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 }
];

console.log(freelancers);

//Freelancer Function

function renderFreelancers(freelancers) {
    let html = "";

    freelancers.forEach(freelancer => {
        const freelancerHTML = `
            <div class="freelancer">
                <p>Name: ${freelancer.name}</p>
                <p>Occupation: ${freelancer.occupation}</p>
                <p>Starting Price: ${freelancer.startingPrice}</p>
            </div>
        `;

        html += freelancerHTML;
    });

    const container = document.getElementById("freelancersContainer");
    container.innerHTML = html;
}
renderFreelancers(freelancers);