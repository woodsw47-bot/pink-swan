const customers = [];

document.getElementById("submitBtn").addEventListener("click", function () {

    const customer = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    customers.push(customer);

    console.clear();
    console.log(customers);

    document.getElementById("confirmation").innerHTML =
        `<p style="color: green;">Customer added: ${customer.firstName} ${customer.lastName}</p>`;

    document.getElementById("customerForm").reset();
});
