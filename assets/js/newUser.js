// Grab the info from submit button

submitBtnEl = document.getElementById('#newUserFormSubmit');

submitBtnEl.addEventListener('click', NewUser);

// NewUser Information 

function NewUser() {

    newFirstNameEl = document.getElementById('#newFirstName').value();
    newLastNameEl = document.getElementById('#newFirstName').value();
    newEmailEl = document.getElementById('#newFirstName').value();
    newUserEl = document.getElementById('#newFirstName').value();
    newPassEl = document.getElementById('#newFirstName').value();

    var new_user = {
        fn: newFirstNameEl,
        ln: newLastNameEl,
        email: newEmailEl,
        user: newUserEl,
        pass: newPassEl,
    }

    return new_user;
}

console.log(NewUser());



