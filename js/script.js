function data(){ 
    var year=parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var date=parseInt(document.getElementById("date").value);
    // console.log(year)
    // console.log(month)
    // console.log(date)
    var dateTwo=new Date();
    dateTwo.setFullYear(year);
    dateTwo.setMonth(month);
    dateTwo.setDate(date);
    var days=[ "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
    var namesBoys=["Kwame", "Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi"];
    var namesGirls=["Ama", "Akosua", "Adwoa", "Abenaa", " Akua", "Yaa", "Afua"];
        
    var actualDay=dateTwo.getDay();

    if (date===""){
    alert("input the a date");
    }
    
    // if (dateTwo >= new Date()){
    // alert("input a passed date as that date isn't here yet");
    // }


    if ((gender.checked==true) & (gender1.checked==true)){
        alert("pick one gender");
    }

     else if (gender.checked==true){
        alert("Your Akan name is "+namesBoys[actualDay]+" since you were born on "+days[actualDay]);
       
    }

    else if (gender1.checked==true){
       alert("Your Akan name is "+namesGirls[actualDay]+" since you were born on "+days[actualDay]);
    }

    else{
        alert("check a gender")
    }
}

