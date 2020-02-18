function data(){
    var yearCC=parseInt(document.getElementById("yearCC").value);
    var yearYY=parseInt(document.getElementById("yearYY").value);
    var month=document.getElementById("month").value;
    var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "november", "december"];
    var monthMM=parseInt(months.indexOf(month))+1;
    var date=parseInt(document.getElementById("date").value);

    var day=function(yearYY, monthMM, date, yearCC){
        return -1*(((yearCC/4) -2*yearCC-1)+((5*yearYY/4))+((26*(monthMM+1)/10))+date)%7;
    };
    var result=parseInt(day(yearYY, monthMM, date, yearCC));
    var days=[ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var actualDay=days[result];
    alert("you were born on "+ actualDay)

    var gender=prompt("what's your gender?");
    if (gender==="male"){
        var namesBoys=["Kwame", "Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi"];
        var localName=namesBoys[result];
        var show="your Akan name would be "+localName;
            alert(show);
    }
    else if (gender==="female"){
        var namesGirls=["Ama", "Akosua", "Adwoa", "Abenaa", " Akua", "Yaa", "Afua"];
        var nameLocal=namesGirls[result];
        var showTwo="your Akan name would be "+nameLocal;
        alert(showTwo);
    }
}

