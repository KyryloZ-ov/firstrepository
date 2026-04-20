function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Seite darf nicht neu laden

    const email = emailInput.value;

    if (validateEmail(email)) {
        emailMessage.textContent = "Email ist gültig";
        emailMessage.style.color = "green";
    } else {
        emailMessage.textContent = "Email ist nicht gültig";
        emailMessage.style.color = "red";
    }
});
