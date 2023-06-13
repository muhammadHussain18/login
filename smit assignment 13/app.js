localStorage.setItem("email", "hussain@gmail.com")
localStorage.setItem("password", "smit123")


// console.log(getPass)
// console.log(getEmail)


function submit() {
    var pass = document.getElementById("exampleInputPassword1").value
    var email = document.getElementById("exampleInputEmail1").value
    var getEmail = localStorage.getItem("email")
    var getPass = localStorage.getItem("password")
    if(email == getEmail && pass == getPass) {
        console.log("welcome to quiz")
    }
     else {
        console.log("incorrect information")
    }

}
