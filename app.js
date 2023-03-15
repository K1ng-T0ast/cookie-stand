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

let shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
console.log(shopHours);

function Store(location, minCustomer, maxCustomer, avgCookie) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
    this.cookiesPerHour = [];
    this.totalCookies = [];
}

let operatingHours = function(){
    let headerRow = document.createElement('tr');
    tableBodyEl.appendChild(headerRow);
    let blankCell = document.createElement('th');
    headerRow.appendChild(blankCell);

    for (let i = 0; i < shopHours.length; i++){
        let timeOpen = document.createElement('th');
        timeOpen.textContent = `${shopHours[i]}`;
        headerRow.appendChild(timeOpen);
    }
    let totalCell = document.createElement('th');
    totalCell.textContent = 'Daily Location Totals';
    headerRow.appendChild(totalCell);
};
operatingHours();

Store.prototype.getAverageCustomers = function () {
    const range = this.maxCustomer - this.minCustomer;
    const customerAverage = Math.floor(Math.random() * range) + this.minCustomer;
    return customerAverage;
};

Store.prototype.getAverageCookies = function () {
    for (let hour = 6; hour <= 19; hour++) {
        const cookieCustomersPerHour = this.getAverageCustomers();
        const cookiesSold = Math.round(cookieCustomersPerHour * this.avgCookie);
        this.totalCookies += cookiesSold;
        console.log(this.totalCookies);
        this.cookiesPerHour.push(cookiesSold);
        console.log(this.avgCookie);
    }
};

Store.prototype.renderTable = function(){
    const tableRow = document.createElement('tr');
    tableBodyEl.appendChild(tableRow);
    const tableData1 = document.createElement('td');
    tableData1.textContent = this.location;
    tableRow.appendChild(tableData1);
    let totalCookies = 0;
    for (let i = 0; i < this.cookiesPerHour.length; i++){
        let tableData2 = document.createElement('td');
        tableData2.textContent = `${this.cookiesPerHour[i]}`;
        tableRow.appendChild(tableData2);
        totalCookies += this.cookiesPerHour[i];
    }
    let tableData2 = document.createElement('td');
    tableData2.textContent = `${totalCookies}`;
    tableRow.appendChild(tableData2);
};

let storeSeattle = new Store('Seattle', 23, 65, 6.3);
storeSeattle.getAverageCookies();
storeSeattle.renderTable();
storeList.push(storeSeattle);
let storeTokyo = new Store('Tokyo', 3, 24, 1.2);
storeTokyo.getAverageCookies();
storeTokyo.renderTable();
storeList.push(storeTokyo);
let storeDubai = new Store('Dubai', 11, 38, 3.7);
storeDubai.getAverageCookies();
storeDubai.renderTable();
storeList.push(storeDubai);
let storeParis = new Store('Paris', 20, 38, 2.3);
storeParis.getAverageCookies();
storeParis.renderTable();
storeList.push(storeParis);
let storeLima = new Store('Lima', 2, 16, 4.6);
storeLima.getAverageCookies();
storeLima.renderTable();
storeList.push(storeLima);
let storeTotal = [];
storeTotal.renderTable();

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
                
            

