var test=prompt("wanna discover your akan name?");
if (test==="yes"){
    var yearCC=parseInt(prompt("enter the first 2 digits of year you were born"));
    var yearYY=parseInt(prompt("enter the last 2 digits of year you were born"));
    var month=(prompt("enter the month you were born"));
    var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "november", "december"];
    var monthMM=parseInt(months.indexOf(month))+1;
    var date=parseInt(prompt("enter the date you were born"));

    var day=function(yearYY, monthMM, date, yearCC){
        return -1*(((yearCC/4) -2*yearCC-1)+((5*yearYY/4))+((26*(monthMM+1)/10))+date)%7;
    };
    var result=parseInt(day(yearYY, monthMM, date, yearCC));
    var answer=result.toFixed();
    var days=[ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var actualDay=days[answer];
    var outPut="you were born on "+ actualDay;
    alert(outPut);

    var gender=prompt("what's your gender?");
    if (gender==="male"){
        var namesBoys=["Kwame", "Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi"];
        var localName=namesBoys[answer];
        var show="your Akan name would be "+localName;
            alert(show);
    }
    else if (gender==="female"){
        var namesGirls=["Ama", "Akosua", "Adwoa", "Abenaa", " Akua", "Yaa", "Afua"];
        var nameLocal=namesGirls[answer];
        var showTwo="your Akan name would be "+nameLocal;
        alert(showTwo);
    }
}
else if(test==="no"){
    alert("okay, later then");
}
else{
    alert("invalid choice");
}
    