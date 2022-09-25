// Grab the info from submit button

var submitBtnEl = document.getElementById('#newUserFormSubmit');



// NewUser Information 

function NewUser() {

    var newFirstNameEl = document.getElementById('#newFirstName').value();
    var newLastNameEl = document.getElementById('#newLastName').value();
    var newEmailEl = document.getElementById('#newEmail').value();
    var newUserEl = document.getElementById('#newUsername').value();
    var newPassEl = document.getElementById('#newPassword').value();

    var new_user = {
        "fn": newFirstNameEl,
        "ln": newLastNameEl,
        "email": newEmailEl,
        "user": newUserEl,
        "pass": newPassEl,
    }

    return new_user;
};

submitBtnEl.addEventListener("click", NewUser);

console.log(NewUser());



