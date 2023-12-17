const createBtn = document.querySelector("button[type='submit']");
const errorBtn = document.getElementById("error-btn");
const errorContainer = document.getElementById("error-container");

function createAccount(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const libraryCode = document.getElementById("code").value;

    if (libraryCode === "12345") {
        window.location.href = "terms.html";
    } else {
        errorContainer.style.display = "flex";
    }
}

errorBtn.addEventListener("click", function() {
    errorContainer.style.display = "none";
});

createBtn.addEventListener("click", createAccount);
