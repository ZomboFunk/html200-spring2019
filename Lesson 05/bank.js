let status = 'start'
let balance = 0
while (status = 'start') {
    let userChoice = prompt('Type: Q - quit, W - withdraw, D - Deposit, B - view balance');
        if (userChoice == 'W') {
            let withdrawalAmount = prompt('how much are you going to withdraw?');
            balance = (balance - withdrawalAmount);
            alert ('Thank you. Your balance is $' + (balance));
        }
        else if (userChoice == 'D') {
            let depositAmount = prompt('how much will you deposit?');
            balance = (balance) + (depositAmount);
            alert ('Thank you. Your balance is $' + (balance));
        }
        else if (userChoice == 'B') {
            alert ('your current balance is $' + (balance));
        }
        else if (userChoice == 'Q') {
            status = 'stop';
            break;
        }
}
alert("Thanks for banking with us.")
