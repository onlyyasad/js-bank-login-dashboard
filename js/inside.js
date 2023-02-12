const depositButton = document.getElementById('btn-deposit');
depositButton.addEventListener('click', function () {
    const inputDepositString = document.getElementById('deposit-input').value;
    const inputDeposit = parseFloat(inputDepositString);
    const currentDepositString = document.getElementById('current-deposit').innerText;
    const currentDeposit = parseFloat(currentDepositString);
    const currentBalanceString = document.getElementById('current-balance').innerText;
    const currentBalance = parseFloat(currentBalanceString);



    if (isNaN(inputDeposit)) {
        alert("Please input a valid number.")
    }
    else {
        const totalDeposit = currentDeposit + inputDeposit;
        document.getElementById('current-deposit').innerText = totalDeposit.toFixed(2);

        const totalBalance = currentBalance + inputDeposit;
        document.getElementById('current-balance').innerText = totalBalance.toFixed(2);

        document.getElementById('deposit-input').value = "";
    }

})

const withdrawButton = document.getElementById('btn-withdraw');
withdrawButton.addEventListener('click', function () {
    const inputWithdrawString = document.getElementById('withdraw-input').value;
    const inputWithdraw = parseFloat(inputWithdrawString);
    const currentWithdrawString = document.getElementById('current-withdraw').innerText;
    const currentWithdraw = parseFloat(currentWithdrawString);
    const currentBalanceString = document.getElementById('current-balance').innerText;
    const currentBalance = parseFloat(currentBalanceString);

    if (isNaN(inputWithdraw)) {
        alert("Please input a valid number.")
    }
    else {
        const totalWithdraw = currentWithdraw + inputWithdraw;
        document.getElementById('current-withdraw').innerText = totalWithdraw.toFixed(2);

        const remainingBalance = currentBalance - inputWithdraw;
        document.getElementById('current-balance').innerText = remainingBalance.toFixed(2);

        document.getElementById('withdraw-input').value = "";
    }

})