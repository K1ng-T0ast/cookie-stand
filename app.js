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

const storeList = [];
const tableBodyEl = document.getElementById('store-values');

// let shopHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
// console.log(shopHours);

function Store(location, minCustomer, maxCustomer, avgCookie) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
    this.totalCookies = [];
}

Store.prototype.getAverageCustomers = function () {
    const range = this.maxCustomer - this.minCustomer;
    const customerAverage = Math.floor(Math.random() * range) + this.minCustomer;
    return customerAverage;
};

Store.prototype.getAverageCookies = function () {
    const cookieAverage = [];
    for (let hour = 6; hour <= 19; hour++) {
        const cookieCustomersPerHour = this.getAverageCustomers();
        const cookiesPurchasedPerHour = Math.round(cookieCustomersPerHour * this.avgCookie);
        this.totalCookies += cookiesPurchasedPerHour;
        console.log(this.totalCookies);
        cookieAverage.push(cookiesPurchasedPerHour);
        console.log(this.avgCookie);
    }
    cookieAverage.push;
    return cookieAverage;
};

Store.prototype.drawTable = function(){
    const tableRow = document.createElement('tr');
    tableBodyEl.appendChild(tableRow);
    const tableData = document.createElement('td');
    tableData.textContent = this.getAverageCookies;
    tableRow.appendChild(tableData);
};

let storeSeattle = new Store('Seattle', 23, 65, 6.3);
storeSeattle.getAverageCookies();
storeSeattle.drawTable();
storeList.push(storeSeattle);
let storeTokyo = new Store('Tokyo', 3, 24, 1.2);
storeTokyo.getAverageCookies();
storeTokyo.drawTable();
storeList.push(storeTokyo);
let storeDubai = new Store('Dubai', 11, 38, 3.7);
storeDubai.getAverageCookies();
storeDubai.drawTable();
storeList.push(storeDubai);
let storeParis = new Store('Paris', 20, 38, 2.3);
storeParis.getAverageCookies();
storeParis.drawTable();
storeList.push(storeParis);
let storeLima = new Store('Lima', 2, 16, 4.6);
storeLima.getAverageCookies();
storeLima.drawTable();
storeList.push(storeLima);

console.log(storeList);
for (let i = 0; i < storeList.length; i++){
    storeList[i].drawTable();
}





// let seattleSales = document.getElementById('seattleList');
// console.log(seattleSales);

// const storeSeattle = {
    //     minCustomer: 23,
    //     maxCustomer: 65,
    //     avgCookie: 6.3,
    //     totalCookies: 0,
    
    //     customersPerHour: function () {
        // const range = this.maxCustomer - this.minCustomer;
        // const customerAverage = Math.floor(Math.random() * range) + this.minCustomer;
        // // console.log(customerAverage);
        // return customerAverage;
        //     },
        
        //     cookiesPerHour: function () {
            // const cookieAverage = [];
            // for (let hour = 6; hour <= 19; hour++) {
                //     const cookieCustomersPerHour = this.customersPerHour();
                //     const cookiesPurchasedPerHour = Math.round(cookieCustomersPerHour * this.avgCookie);
                //     this.totalCookies += cookiesPurchasedPerHour;
                //     cookieAverage.push(cookiesPurchasedPerHour);
                // }
                // cookieAverage.push;
                // return cookieAverage;
                
                // totalSales: function () {
                //     const cookiesSeattle = storeSeattle.cookiesPerHour();
                //     console.log(cookiesSeattle);
                //     for (let i = 0; i < cookiesSeattle.length; i++) {
                //         let li = document.createElement('li');
                //         li.textContent = `${storeHours[i]}: ${cookiesSeattle[i]} cookies`;
                //         seattleSales.appendChild(li);
                //     }
                //     let li = document.createElement('li');
                //     li.textContent = `Total: ${this.totalCookies} cookies`;
                //     seattleSales.appendChild(li);
                // };
                // storeSeattle.totalSales();
                // let customers6am = storeSeattle.customersPerHour();
                // console.log(customers6am);
                // let customers8pm = storeSeattle.customersPerHour();
                // console.log(customers8pm);
                
            

