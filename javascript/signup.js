var users = [
    {
        firstname: "Carolyn",
        lastname: "Johnsen",
        username: "CarolynJ",
        email: "carolyn95@outlook.com",
        password: "supersecret123"
    },

    {
        firstname: "Grace",
        lastname: "Palmer",
        username: "PalmFace",
        email: "grace.face@gmail.com",
        password: "little87Max"
    },

    {
        firstname: "Benjamin",
        lastname: "Bannerman",
        username: "Benniboy",
        email: "bennisniper2000@yahoo.com",
        password: "benniiscool"
    },
    
    {
        firstname: "Kevin",
        lastname: "Brenden",
        username: "98rootdev",
        email: "kevin@mail.com",
        password: "passord"
    },
    
    {
        firstname: "Bernt Johan",
        lastname: "Aspehaug",
        username: "Berntolini",
        email: "bernt@yahoo.com",
        password: "1234"
    }
];

function createUser() {
    if (document.getElementById("firstname").value != ""
        || document.getElementById("lastname").value != ""
        || document.getElementById("username").value != ""
        || document.getElementById("email").value != ""
        || document.getElementById("password").value != ""
    ) {

        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var userInfoDict = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        };

        users.push(userInfoDict);

        console.log(window.users[0]);

        window.location.replace("../pages/login.html");

    } else {
        alert("Registration failed, please try again.")
    }

    refreshUserDropDown();
    createUser.preventDefault();
}


