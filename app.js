"use strict";

// function customersPerHour (number){
//         this.number = number;
//         this.customersPerHour = function(){
//         const range = this.maxCustomer - this.minCustomer;
//         const customersPerHour = Math.floor(Math.random() * range) + this.minCustomer;
//         return customersPerHour;
//     }
// }
// const seattleHours = new customersPerHour(number);
// number.number;
// hours.customersPerHour();

// How do I create a constructor for this code to use on all stores?


const storeSeattle = {
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,

    customersPerHour: function () {
        const range = this.maxCustomer - this.minCustomer;
        const customerAverage = Math.floor(Math.random() * range) + this.minCustomer;
        return customerAverage;
    },

    cookiesPerHour: function(){
        const cookieAverage = [];
        let totalCookies = 0;
        for (let hour = 6; hour <= 19; hour++){
            const cookieCustomersPerHour = this.customersPerHour();
            const cookiesPurchased = Math.round(cookieCustomersPerHour * this.avgCookie);
            totalCookies += cookiesPurchased;
            cookieAverage.push(cookiesPurchased);
        }
        cookieAverage.push(totalCookies);
        return cookieAverage;
    }
};

let customers6am = storeSeattle.customersPerHour();
console.log(customers6am);
let customers8pm = storeSeattle.customersPerHour();
console.log(customers8pm);

const cookiesSeattle = storeSeattle.cookiesPerHour();
console.log(cookiesSeattle);

const ul = document.createElement('ul');

for (let i = 0; i < cookiesSeattle.length; i++){
    const li = document.createElement('li');
    li.textContent = cookiesSeattle[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);

let storeTokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2
}

let storeDubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7
}

let storeParis = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookie: 2.3
}

let storeLima = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6
}

