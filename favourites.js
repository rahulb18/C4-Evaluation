var favArr=JSON.parse(localStorage.getItem("favourites"));

displayData(favArr);

function displayData(data){

    data.forEach(function(elem){

        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchNum;

        var td2=document.createElement("td");
        td2.innerText=elem.matchTeamA;

        var td3=document.createElement("td");
        td3.innerText=elem.matchTeamB;

        var td4=document.createElement("td");
        td4.innerText=elem.matchDate;

        var td5=document.createElement("td");
        td5.innerText=elem.matchVenue;

        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="Red";
        td6.style.cursor="pointer";
        

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    })


    
}