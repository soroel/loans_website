window.onload = function() {
    var ss = document.getElementById("sign");
    ss.onclick = function() {
        var username = document.getElementById("name").value;
        var password = document.getElementById('pass').value;
        var rep = document.getElementById("repPass").value;
        if (password != 0) {
            if (password === rep) {
                localStorage.setItem('f_name', username);
                localStorage.setItem('U_password', password);
                window.location.href = 'account.html';
            } else {
                alert("Passwords do not match!")
            }
        } else {

        }
        return false;
    }

    var a = document.getElementById("up");
    a.onclick = function(e) {
        $("#login").attr("style", "display:none;");
        $("#sign-up").attr("style", "");
        e.preventDefault();
        return false;
    }
    var a = document.getElementById("in");
    a.onclick = function(e) {
        $("#sign-up").attr("style", "display:none;");
        $("#login").attr("style", "");
        e.preventDefault();
        return false;
    }
    var ss = document.getElementById("log");
    ss.onclick = function(e) {
        var username = document.getElementById("uname").value;
        var password = document.getElementById("password").value;
        if (username === localStorage.getItem("f_name") && password === localStorage.getItem("U_password")) {
            window.location.href = 'account.html';
            console.log("credentials accepted");
        } else {
            console.log("invalid");
            document.getElementById("cred").innerHTML = 'Invalid Credentials! Try again';
        }
        e.preventDefault();
    }
}

// function login() {
//     var usernam = document.getElementById("uname").value;
//     var passwor = document.getElementById("upass").value;

// }