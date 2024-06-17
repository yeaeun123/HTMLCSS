
window.addEventListener("load",(event)=> {
    document.getElementById("btnHello").onclick = event => {
        alert("안녕하세요");
        console.log(event);
    }
})