// =========================================
// NOVALYNK — INVOICES & BILLING HISTORY
// JavaScript
// =========================================

const toast = document.getElementById("toast");


// =========================================
// TOAST MESSAGE
// =========================================

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// =========================================
// CREATE INVOICE
// =========================================

function createInvoice() {

    showToast("NEW INVOICE CREATED ✓");

}


// =========================================
// DOWNLOAD INVOICE
// =========================================

function downloadInvoice(invoiceNumber) {

    showToast(invoiceNumber + " PDF READY ✓");

}


// =========================================
// EDIT BILLING PROFILE
// =========================================

function editBillingProfile() {

    showToast("BILLING PROFILE EDIT MODE ✓");

}


// =========================================
// SEARCH INVOICES
// =========================================

const searchInput = document.getElementById("invoiceSearch");

searchInput.addEventListener("input", function () {

    const searchValue =
        this.value.toLowerCase().trim();

    const rows =
        document.querySelectorAll("#invoiceTable tbody tr");

    rows.forEach(row => {

        const rowText =
            row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});


// =========================================
// STATUS FILTER
// =========================================

const statusFilter =
    document.getElementById("statusFilter");

statusFilter.addEventListener("change", function () {

    const selectedStatus = this.value;

    const rows =
        document.querySelectorAll("#invoiceTable tbody tr");

    rows.forEach(row => {

        const rowStatus =
            row.getAttribute("data-status");

        if (
            selectedStatus === "all" ||
            rowStatus === selectedStatus
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

    showToast(
        selectedStatus.toUpperCase() +
        " INVOICES FILTERED ✓"
    );

});


// =========================================
// PERIOD FILTER
// =========================================

const periodFilter =
    document.getElementById("periodFilter");

periodFilter.addEventListener("change", function () {

    showToast(
        this.value.toUpperCase() +
        " RECORDS SELECTED ✓"
    );

});


// =========================================
// TABLE ROW CLICK
// =========================================

document
    .querySelectorAll("#invoiceTable tbody tr")
    .forEach(row => {

        row.addEventListener("click", function (event) {

            if (
                event.target.classList.contains("download-btn")
            ) {
                return;
            }

            const invoice =
                this.querySelector(".invoice-id")
                    .textContent
                    .trim();

            showToast(invoice + " SELECTED ✓");

        });

    });