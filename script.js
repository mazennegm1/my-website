document.addEventListener("DOMContentLoaded", function () {
    let modebtn = document.getElementById("mode");
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
    let eye = document.getElementById("eye")
    let password = document.getElementById("password")
    if (eye && password) {
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
    };


    let course = document.querySelectorAll(".course-card")
    let searchCourse = document.getElementById("search-course");
    if (searchCourse) {
        searchCourse.addEventListener("input", function () {
            let value = searchCourse.value.toLocaleLowerCase();
            course.forEach(courseCard => {
                let courseName = courseCard.querySelector("h2").innerHTML.toLocaleLowerCase();
                if (courseName.includes(value) || value == "") {
                    courseCard.style.display = "";
                }
                else {
                    courseCard.style.display = "none";
                }
            });
        });
    };

    //Login
    let users = [{
        name: "Mazen",
        email: "mazen262956@nhu.edu.eg",
        password: "mazen123",
        role: "student"
    },
    {
        name: "Rana",
        email: "rana.khalil@nhu.edu.eg",
        password: "rana123",
        role: "staff"
    },
    {
        name: "Amany",
        email: "amany.abdo@nhu.edu.eg",
        password: "amany123",
        role: "staff"
    }]

    let email = document.getElementById("username")
    let login = document.querySelector(".form-login")


    if (login && email && password) {
        login.onsubmit = function (e) {
            e.preventDefault();
            let emailValue = email.value;
            let passwordValue = password.value;

            let isLoggedIn = false;

            for (let i = 0; i < users.length; i++) {
                if (emailValue === users[i].email && passwordValue === users[i].password) {
                    isLoggedIn = true;
                    if (users[i].role === "student") {
                        window.location.href = "student_dashboard.html";
                    } else {
                        window.location.href = "staff_dashboard.html";
                    }
                    break;
                }

            }
            if (isLoggedIn === false) {
                alert("Wrong email or password");
            }
        }


    }
})

