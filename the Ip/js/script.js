var yearCC=parseInt(prompt("enter the first 2 digits of year you were born"));
var yearYY=parseInt(prompt("enter the last 2 digits of year you were born"));
var month=(prompt("enter the month you were born"));
var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "november", "december"];
var monthMM=parseInt(months.indexOf(month))+1;
var date=parseInt(prompt("enter the date you were born"));

var day=function(yearYY, monthMM, date, yearCC){
    return -1*(((yearCC/4) -2*yearCC-1)+((5*yearYY/4))+((26*(monthMM+1)/10))+date)%7;
};