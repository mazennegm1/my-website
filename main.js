let modebtn = document.getElementById("mode");
let eye = document.getElementById("eye")
let pass = document.getElementById("password")
modebtn.onclick = function () {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        modebtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    }
    else {
        modebtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");

    }
}
if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
}
;

// Eye Login
eye.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eye.innerHTML = '<i class="fas fa-eye"></i>';


    }
    else {
        password.type = "password";
        eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    }
};
