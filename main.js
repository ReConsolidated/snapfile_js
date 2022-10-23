document.getElementById("demo").style.fontSize = "100px";


function callApi() {
    document.getElementById("demo").innerHTML = "Api called";
    const userAction = async () => {
        const response = await fetch('http://localhost:8080/is_alive');
        document.getElementById("demo").innerHTML = "Api call received";
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson);
    }
    userAction().then(r => console.log("finished"));
}

async function uploadFile() {
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    let response = await fetch('http://localhost:8080/upload', {
        method: "POST",
        body: formData
    });
    if (response.status == 200) {
        let json = await response.json()
        console.log(json);
        document.getElementById("your_code").innerHTML = "Your code: " + json["code"];
        console.log("code: " + json["code"]);
    }
}

async function downloadFile() {
    let code = document.getElementById("code").value;
    let url = 'http://localhost:8080/download/' + code;
    const anchor = document.createElement("a");
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}