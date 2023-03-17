"use strict";

const tableBodyEl = document.getElementById('store-values');
const footerBodyEl = document.getElementById('footer-values');


let shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
console.log(shopHours);
const storeList = [];

function Store(location, minCustomer, maxCustomer, avgCookie) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
    this.cookiesPerHour = [];
    this.totalCookies = [];
    storeList.push(this);
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
    totalCell.textContent = 'Daily Totals';
    headerRow.appendChild(totalCell);
};

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

let storeTotals = function(){
    
    footerBodyEl.innerHTML = '';
    let footerRow = document.createElement('tr');
    footerBodyEl.appendChild(footerRow);

    
    let footerCell = document.createElement('th');
    footerCell.textContent = 'Totals';
    footerRow.appendChild(footerCell);
    
    let grandTotal = 0;
    for (let i =0; i < shopHours.length; i++){
        let hourlyTotal = 0;
        for (let j = 0; j < storeList.length; j++){
            hourlyTotal += storeList[j].cookiesPerHour[i];
            grandTotal += storeList[j].cookiesPerHour[i];
        }
        let tdElement = document.createElement('td');
        tdElement.textContent = hourlyTotal;
        footerRow.appendChild(tdElement);
    }
    let footerData = document.createElement('td');
    footerData.textContent = grandTotal;
    footerRow.appendChild(footerData);
};


operatingHours();

let storeSeattle = new Store('Seattle', 23, 65, 6.3);
let storeTokyo = new Store('Tokyo', 3, 24, 1.2);
let storeDubai = new Store('Dubai', 11, 38, 3.7);
let storeParis = new Store('Paris', 20, 38, 2.3);
let storeLima = new Store('Lima', 2, 16, 4.6);

for (let i = 0; i < storeList.length; i++){
    storeList[i].getAverageCookies();
    storeList[i].renderTable();
}
storeTotals();

let formEL = document.getElementById('store-form');

function handleClick(event) {
    console.log('click occured');
    event.preventDefault();
    let { location_name, minimum_customer, maximum_customer, average_cookies } = event.target;
    console.log(location_name.value, minimum_customer.value, maximum_customer.value, average_cookies.value);
    let newStore = new Store(location_name.value, parseInt(minimum_customer.value), parseInt(maximum_customer.value), parseFloat(average_cookies.value));
    storeList.push(newStore);
    newStore.getAverageCookies();
    newStore.renderTable();
    storeTotals();
    console.log(event);
    location_name.value = '', minimum_customer.value = '', maximum_customer.value = '', average_cookies.value = '';
}

formEL.addEventListener('submit', handleClick);

