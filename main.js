
async function downloadFile() {
    let code = document.getElementById("code_input").value;
    if (code.length === 6) {
        let url = 'http://localhost:8080/download/' + code;
        const anchor = document.createElement("a");
        anchor.href = url;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    } else {
        alert("Code length is wrong");
    }

}