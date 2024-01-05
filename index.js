//sing up page


document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault
    let type = document.getElementById("value").value;
    let user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    if (type == "submit") {
        fetch("http://localhost:8090/posts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("email").value = "";
                document.getElementById0("password").value = "";
            });
    }
})

