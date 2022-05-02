document.querySelector("#masaiForm").addEventListener("submit",myMatch);

var saveMatch=JSON.parse(localStorage.getItem("schedule")) || [];

function myMatch(){
    event.preventDefault();

    var matchData={
        matchNum:masaiForm.matchNum.value,
        matchTeamA:masaiForm.teamA.value,
        matchTeamB:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchVenue:masaiForm.venue.value
    };

    saveMatch.push(matchData);
    localStorage.setItem("schedule",JSON.stringify(saveMatch));
    window.location.href="matches.html";
}