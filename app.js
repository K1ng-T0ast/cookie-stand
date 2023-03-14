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
let shopHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
console.log(storeHours);

function shopLocation(location, minCustomer, maxCustomer, avgCookie){
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
}

Store.prototype.getAverageCustomers = function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
};

Store.prototype.getAverageCookies = function(){
    return Math.round(this.getAverageCustomers() * this.avgCookie);
};

let storeSeattle = new shopLocation("Seattle", 23, 65, 6.3);
let storeTokyo = new shopLocation("Tokyo", 3, 24, 1.2);
let storeDubai = new shopLocation("Dubai", 11, 38, 3.7);
let storeParis = new shopLocation("Paris", 20, 38, 2.3);
let storeLima = new shopLocation("Lima", 2, 16, 4.6);



let seattleSales = document.getElementById('seattleList');
console.log(seattleSales);

// const storeSeattle = {
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookie: 6.3,
//     totalCookies: 0,

//     customersPerHour: function () {
//         const range = this.maxCustomer - this.minCustomer;
//         const customerAverage = Math.floor(Math.random() * range) + this.minCustomer;
//         // console.log(customerAverage);
//         return customerAverage;
//     },

//     cookiesPerHour: function () {
//         const cookieAverage = [];
//         for (let hour = 6; hour <= 19; hour++) {
//             const cookieCustomersPerHour = this.customersPerHour();
//             const cookiesPurchasedPerHour = Math.round(cookieCustomersPerHour * this.avgCookie);
//             this.totalCookies += cookiesPurchasedPerHour;
//             cookieAverage.push(cookiesPurchasedPerHour);
//         }
//         cookieAverage.push;
//         return cookieAverage;
//     },

    totalSales: function (){
        const cookiesSeattle = storeSeattle.cookiesPerHour();
        console.log(cookiesSeattle);
        for (let i = 0; i < cookiesSeattle.length; i++){
            let li = document.createElement('li');
            li.textContent = `${storeHours[i]}: ${cookiesSeattle[i]} cookies`;
            seattleSales.appendChild(li);
        }
            let li = document.createElement('li');
            li.textContent = `Total: ${this.totalCookies} cookies`;
            seattleSales.appendChild(li);
    };
// };
storeSeattle.totalSales();
// let customers6am = storeSeattle.customersPerHour();
// console.log(customers6am);
// let customers8pm = storeSeattle.customersPerHour();
// console.log(customers8pm);


let storeTokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2
};

let storeDubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7
};

let storeParis = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookie: 2.3
};

let storeLima = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6
};

