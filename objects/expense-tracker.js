let myAccount = {
    firstName: 'Stuart',
    lastName: 'Brown',
    expenses: 0,
    income: 0,
    currentBalance: 0,
}

let addExpense = function (account, amount) {
    account.expenses += amount
    currentBalance(account)
}

let addIncome = function (account, amount) {
    account.income += amount
    currentBalance(account)
}

let currentBalance = function (account) {
    let current = account.currentBalance
    current = account.income - account.expenses
    account.currentBalance = current
}

let getAccountSummary = function (account) {
    return `Account for ${account.firstName} has $${account.currentBalance}. 
$${account.income} in income.
$${account.expenses} in expenses`
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
    account.currentBalance = 0
}


addIncome(myAccount, 1500)
addExpense(myAccount, 500)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
