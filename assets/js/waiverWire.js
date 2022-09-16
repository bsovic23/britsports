// Waiver List
waiverList = document.querySelector("#waiverList");

// Button 
addWaiverPlayerBtn = document.querySelector("#addWaiverPlayer");

addWaiverPlayerBtn.addEventListener("click", waiverSubmit);

// Button Function 
function waiverSubmit() {

    function addToWaiverList() {
        var divEl = document.createElement('div');
        var h1El = document.createElement('h1');
        var pEl = document.createElement('p');

        h1El.textContent = "Player: " + waiverPlayerAddEl[0];
        pEl.textContent = "Position: " + waiverPlayerAddEl[1];

        divEl.appendChild(h1El);
        divEl.appendChild(pEl);

        waiverList.appendChild(divEl);
    }

    var waiverPlayerAddEl = "";

    playerNameEl = document.getElementById("waiverName").value;
    playerPositionEl = document.querySelector('input[name="waiverPosition"]:checked').value;

    waiverPlayerAddEl = [playerNameEl, playerPositionEl];

   addToWaiverList(waiverPlayerAddEl);
}

// Commit current waiverList to local storage

// Pull current waiverList when page loaded





