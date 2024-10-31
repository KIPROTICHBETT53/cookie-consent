document.addEventListener("DOMContentLoaded", function () {
    const cookieConsentPopup = document.getElementById("cookie-consent");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if the user has already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
        // Show the popup
        cookieConsentPopup.style.display = "block";
    }

    // Add event listener to the accept button
    acceptButton.addEventListener("click", function () {
        // Set a flag in local storage to remember the consent
        localStorage.setItem("cookieConsent", "accepted");
        // Hide the popup
        cookieConsentPopup.style.display = "none";
    });
});
