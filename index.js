const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");




checkButton.addEventListener("click", function validateBillAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {

    } else {
        showMessage("Invalid Bill Amount");
    }

});

function showMessage(newMessage) {
    
    newMessage.style.display = "block";
    newMessage.innerText = message;
}