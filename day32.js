//Cash Register Simulation


const price = 19.5;                 // price of the item
const cash = 20;                     // cash given by customer
const cashInDrawer = [              // cash in drawer as [denomination, totalAmountAvailable]
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0.5],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
];

function cashRegister(price, cash, cashInDrawer) {
    const DENOMINATIONS = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let change = +(cash - price).toFixed(2);
    let changeArr = [];

    let reversedDrawer = cashInDrawer.reverse();

    let totalCash = +(reversedDrawer.reduce((acc, curr) => acc + curr[1], 0)).toFixed(2);

    for (let [denom, amountAvailable] of reversedDrawer) {
        const denomValue = DENOMINATIONS[denom];
        let amountToReturn = 0;

        while (change >= denomValue && amountAvailable > 0) {
            change = +(change - denomValue).toFixed(2);
            amountAvailable = +(amountAvailable - denomValue).toFixed(2);
            amountToReturn = +(amountToReturn + denomValue).toFixed(2);
        }

        if (amountToReturn > 0) {
            changeArr.push([denom, amountToReturn]);
        }
    }

    if (change > 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }

    if (totalCash === cash - price) {
        return {
            status: "CLOSED",
            change: cashInDrawer.reverse() // return in original order
        };
    }

    return {
        status: "OPEN",
        change: changeArr
    };
}

console.log(cashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0.5],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));

