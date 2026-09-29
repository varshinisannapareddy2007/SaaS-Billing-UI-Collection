// SaaS Pricing - JavaScript

const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".price small");

// Monthly and yearly prices
const monthlyPrices = [499, 999, 1999];
const yearlyPrices = [399, 799, 1599];

// Billing toggle
toggle.addEventListener("change", function () {

    if (this.checked) {
        // Yearly
        prices.forEach((price, index) => {
            price.firstChild.textContent = "₹" + yearlyPrices[index];
        });

        periods.forEach(period => {
            period.textContent = "/ YEAR";
        });

        document.querySelector(".monthly").classList.remove("active");
        document.querySelector(".yearly").classList.add("active");

        showToast("YEARLY BILLING ACTIVATED ✓");

    } else {
        // Monthly
        prices.forEach((price, index) => {
            price.firstChild.textContent = "₹" + monthlyPrices[index];
        });

        periods.forEach(period => {
            period.textContent = "/ MONTH";
        });

        document.querySelector(".yearly").classList.remove("active");
        document.querySelector(".monthly").classList.add("active");

        showToast("MONTHLY BILLING ACTIVATED ✓");
    }
});


// Select plan
function selectPlan(plan) {
    showToast(plan + " PLAN SELECTED ✓");
}


// Toast notification
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// Add small animation when pricing cards are clicked
document.querySelectorAll(".pricing-card").forEach(card => {

    card.addEventListener("click", function () {

        document.querySelectorAll(".pricing-card").forEach(item => {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

    });

});