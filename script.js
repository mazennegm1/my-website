document.addEventListener("DOMContentLoaded", function () {
    //Mazen
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
    course.forEach(card => {
        card.onclick = function () {
            let courseName = card.querySelector("h2").innerText;
            localStorage.setItem("courseName", courseName)
            window.location.href = "course_details.html";
        }
    })
    let title = document.getElementById("course-name");
    let coursename = localStorage.getItem("courseName");
    if (title && coursename) {
        title.textContent = coursename;
    }

    //Search
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
            let worng = document.getElementById("login-error")

            for (let i = 0; i < users.length; i++) {
                if (emailValue === users[i].email && passwordValue === users[i].password) {
                    isLoggedIn = true;
                    localStorage.setItem("thisUser", users[i].name)
                    if (users[i].role === "student") {
                        window.location.href = "student_dashboard.html";
                    } else {
                        window.location.href = "staff_dashboard.html";
                    }
                    localStorage.setItem("role", users[i].role)
                    break;

                }

            }
            if (isLoggedIn === false)
                worng.style.display = "block";

            setTimeout(function () {
                worng.style.display = "none";
            }, 3000)

        }


    }
    let name = localStorage.getItem("thisUser")
    let studentName = document.querySelector(".studentStaffName")
    if (name && studentName) {
        studentName.textContent = "Welcome, " + name;
    }
    

    //Jana
    document.getElementById("admissionForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
})

//Moamen
document.querySelectorAll(".coursemanage-title").forEach(title => {
    title.addEventListener("click", function (e) {

        e.stopPropagation();

        let course = title.closest(".course-header");
        let content = course.querySelector(".course-contentmanage");
        let isOpen = content.classList.contains("active");

        document.querySelectorAll(".course-contentmanage").forEach(c => {
            c.classList.remove("active");
        });

        if (!isOpen) {
            content.classList.add("active");
        }
    });
});

document.querySelectorAll(".week-header").forEach(week => {
    week.addEventListener("click", function (e) {

        e.stopPropagation();

        let content = week.querySelector(".week-content");
        let isOpen = content.classList.contains("active");

        let course = week.closest(".course-header");

        course.querySelectorAll(".week-content").forEach(w => {
            w.classList.remove("active");
        });

        if (!isOpen) {
            content.classList.add("active");
        }
    });
});