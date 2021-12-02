const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 1];


checkButton.addEventListener("click", function validateBillAmount() {
    message.style.display = "none";//hiding message  at line 22
    if (billAmount.value > 0) {

        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Cash given should be more than or equal to the bill amount");
        }

    } else {
        showMessage("Amount should be more than zero");
    }
});

function showMessage(msg){
    message.style.display = "block"; 
    message.innerHTML = msg;
}

function calculateChange(amountToBeReturned){

    for(let i =0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);

        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}