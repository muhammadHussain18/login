localStorage.setItem("email", "hussain@gmail.com")
localStorage.setItem("password", "smit123")


function submit(event) {
    event.preventDefault();
    var pass = document.getElementById("exampleInputPassword1").value
    var email = document.getElementById("exampleInputEmail1").value
    var getEmail = localStorage.getItem("email")
    var getPass = localStorage.getItem("password")
    if (email === getEmail && pass === getPass) {
        alert("fsasafsa")
    } else {
        alert("invalid email")
    }

}