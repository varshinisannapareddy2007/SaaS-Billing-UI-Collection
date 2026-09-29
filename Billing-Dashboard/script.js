// Billing Dashboard - JavaScript

const toast = document.getElementById("toast");


// Show toast message
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// Export report button
function exportReport() {
    showToast("REPORT GENERATED ✓");
}


// View all transactions
function viewAllTransactions() {
    showToast("ALL TRANSACTIONS LOADED ✓");
}


// Chart period selector
const chartPeriod = document.getElementById("chartPeriod");

chartPeriod.addEventListener("change", function () {
    showToast(this.value.toUpperCase() + " SELECTED ✓");
});


// Add click effect to stat cards
document.querySelectorAll(".stat-card").forEach(card => {

    card.addEventListener("click", function () {

        const title = this.querySelector("p").textContent;

        showToast(title + " SELECTED ✓");

    });

});


// Add hover/click effect to mini cards
document.querySelectorAll(".mini-card").forEach(card => {

    card.addEventListener("click", function () {

        const title = this.querySelector("p").textContent;

        showToast(title + " OPENED ✓");

    });

});


// Transaction row interaction
document.querySelectorAll("tbody tr").forEach(row => {

    row.addEventListener("click", function () {

        const transactionId = this.querySelector("td").textContent;

        showToast(transactionId + " SELECTED ✓");

    });

});