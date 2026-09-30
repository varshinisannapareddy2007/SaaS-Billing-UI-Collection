// Payment Checkout - JavaScript

const cardForm = document.getElementById("cardForm");
const upiForm = document.getElementById("upiForm");
const bankForm = document.getElementById("bankForm");

const toast = document.getElementById("toast");
const successModal = document.getElementById("successModal");


// =========================
// Toast
// =========================

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// =========================
// Payment Method Selection
// =========================

function selectMethod(button, method) {

    document.querySelectorAll(".method").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");

    cardForm.classList.add("hidden");
    upiForm.classList.add("hidden");
    bankForm.classList.add("hidden");

    if (method === "CARD") {
        cardForm.classList.remove("hidden");
    }

    if (method === "UPI") {
        upiForm.classList.remove("hidden");
    }

    if (method === "NET BANKING") {
        bankForm.classList.remove("hidden");
    }

    showToast(method + " PAYMENT SELECTED ✓");
}


// =========================
// Card Number Formatting
// =========================

const cardNumber = document.getElementById("cardNumber");

cardNumber.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    value = value.substring(0, 16);

    let formatted = value.match(/.{1,4}/g);

    this.value = formatted ? formatted.join(" ") : "";
});


// =========================
// Expiry Formatting
// =========================

const expiry = document.getElementById("expiry");

expiry.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    value = value.substring(0, 4);

    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }

    this.value = value;
});


// =========================
// CVV
// =========================

const cvv = document.getElementById("cvv");

cvv.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "").substring(0, 3);

});


// =========================
// Process Payment
// =========================

function processPayment() {

    const activeMethod =
        document.querySelector(".method.active strong").textContent;

    if (activeMethod === "CARD") {

        const email =
    document.getElementById("customerEmail").value.trim();

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const number =
    document.getElementById("cardNumber").value.replace(/\s/g, "");
    
    .value.replace(/\s/g, "");

        const expiryValue =
            document.getElementById("expiry").value.trim();

        const cvvValue =
            document.getElementById("cvv").value.trim();

if (!name || !emailPattern.test(email) ||
    number.length !== 16 ||
    expiryValue.length !== 5 ||
    cvvValue.length !== 3) {

    showToast("PLEASE COMPLETE VALID CARD DETAILS");

    return;
}
    }


    if (activeMethod === "UPI") {

        const upi =
            document.getElementById("upiId").value.trim();

        if (!upi || !upi.includes("@")) {

            showToast("PLEASE ENTER A VALID UPI ID");

            return;
        }
    }


    if (activeMethod === "NET BANKING") {

        const bank =
            document.getElementById("bank").value;

        if (!bank) {

            showToast("PLEASE SELECT YOUR BANK");

            return;
        }
    }


    showToast("PROCESSING PAYMENT...");

    setTimeout(() => {

        successModal.classList.add("show");

    }, 1200);
}


// =========================
// Close Success Modal
// =========================

function closeModal() {

    successModal.classList.remove("show");

    showToast("SUBSCRIPTION ACTIVATED ✓");

}