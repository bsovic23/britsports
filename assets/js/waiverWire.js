// Waiver List
waiverList = document.querySelector("#waiverList");

// Button 
addWaiverPlayerBtn = document.querySelector("#addWaiverPlayer");

addWaiverPlayerBtn.addEventListener("click", waiverSubmit);

// Button Function 
function waiverSubmit() {

    function clearWaiver() {
        document.getElementById("waiverName").value = "";
        document.getElementById("waiverTeam").value = "";
    }

    function addToWaiverList() {
        var divEl = document.createElement('div');
        var h3El = document.createElement('h3');
        var pEl = document.createElement('p');
        var p2El = document.createElement('p');

        h3El.textContent = "Player: " + waiverPlayerAddEl[0];
        pEl.textContent = "Position: " + waiverPlayerAddEl[1];
        p2El.textContent = "Team: " + waiverPlayerAddEl[2];

        divEl.appendChild(h3El);
        divEl.appendChild(pEl);
        divEl.appendChild(p2El);

        if (waiverPlayerAddEl[1] == "Qb") {
            divEl.setAttribute("class", "waiverCardQb")
        } else if (waiverPlayerAddEl[1] == "Rb") {
            divEl.setAttribute("class", "waiverCardRb")
        } else if (waiverPlayerAddEl[1] == "Te") {
            divEl.setAttribute("class", "waiverCardTe")
        } else divEl.setAttribute("class", "waiverCardWr")

        waiverList.appendChild(divEl);

        // Clears the waiver form
        clearWaiver();
    }

    var waiverPlayerAddEl = "";

    playerNameEl = document.getElementById("waiverName").value;
    playerPositionEl = document.querySelector('input[name="waiverPosition"]:checked').value;
    playerTeamEl = document.getElementById('waiverTeam').value;

    waiverPlayerAddEl = [playerNameEl, playerPositionEl, playerTeamEl];

   addToWaiverList(waiverPlayerAddEl);
}

// Commit current waiverList to local storage

// Pull current waiverList when page loaded





