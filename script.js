function generateColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = randomColor;
    document.getElementById("colorText").innerText = randomColor;
}


function copyToClipboard(){
    const color = document.getElementById('colorText').innerText;
    navigator.clipboard.writeText(color);
    alert("Copied: "+color)
}