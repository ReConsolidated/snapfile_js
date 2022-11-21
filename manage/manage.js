addEventListener("load", (event) => {
    getFilesList();
});

async function getFilesList() {
    let url = 'http://localhost:8080/manage_files';
    let response = await fetch(url, {
        credentials: 'include'
    });
    let data = await response.json();
    if (data.length > 0) {
        let element = document.getElementById("no_codes");
        element.remove();
    } else {
        let element = document.getElementById("no_codes");
        element.style.visibility = "visible";
    }
    let ul = document.getElementById("list");
    data.forEach( (element) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "/snapfile_js";

        a.appendChild(document.createTextNode(element["code"]));
        let br = document.createElement("br");
        a.appendChild(br);
        a.appendChild(document.createTextNode(element["fileName"]));
        li.appendChild(a);
        ul.appendChild(li);
       console.log(element);
    });
}