

let id = -1
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let type = document.getElementById("value").value;
    let user = {
        img: document.getElementById("img").value,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value
    }
    if (type == "submit") {
        fetch("http://localhost:8090/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("img").value = "";
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
                document.getElementById("date").value = "";
            });
    }
    else {
        fetch("http://localhost:8090/user/" + id, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(() => {
                fetch("http://localhost:8090/user")
                    .then((response) => response.json())
                    .then((response) => ui(response));
            })
    }
    window.location.href = "./blog.html";

})
//ui
const ui = (data) => {
    document.getElementById("ui").innerHTML = "";
    data.map((item) => {
        let img = document.createElement("img")
        img.src = item.img
        let title = document.createElement("h2")
        title.innerHTML = item.title
        let description = document.createElement("p")
        description.innerHTML = item.description
        let date = document.createElement("h5")
        date.innerHTML = item.date
        let btn1 = document.createElement("button")
        let container = document.createElement("div");
        container.append(img, title, description, date);
        document.getElementById("ui").append(container)
    })
}
//get
fetch("http://localhost:8090/user")
    .then((response) => response.json())
    .then((response) => ui(response))