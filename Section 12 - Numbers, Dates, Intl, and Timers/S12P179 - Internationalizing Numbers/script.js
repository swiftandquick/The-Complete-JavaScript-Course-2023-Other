'use strict';

const num = 3884764.23;

const options = {
    style: 'unit', 
    unit: 'mile-per-hour'
}

const options2 = {
    style: 'unit', 
    unit: 'celsius'
}

const options3 = {
    style: 'percent'
}

const options4 = {
    style: 'currency', 
    currency: 'USD', 
    useGrouping: false
}

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); // American format, with mph unit.  
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num)); // German format, with celsius unit.  
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options3).format(num)); // Syrian format, with percentage.  

console.log(navigator.language, new Intl.NumberFormat(navigator.language, options4).format(num)); // local format, with currency.  