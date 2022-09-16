// Login Button

loginBtnEl = document.querySelector("#login");

// Login Function
function login() {
    var usernameEl = document.getElementById("username").value;
    var passwordEl = document.getElementById("password").value;

    var arrayLogin = [usernameEl, passwordEl];
    var users = [["brit", "sovic"],["alec", "zoida"]];

    for (i = 0; i < users.length; i++) {
        if (arrayLogin[0] == users[i][0] && arrayLogin[1] == users[i][1]) {
            window.alert("Login Success!");
        } else {
            console.log("YOU ARE NOT ALLOWED TO ACCESS");
        }
    }
}

loginBtnEl.addEventListener("click", login)
