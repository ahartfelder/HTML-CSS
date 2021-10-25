function change() {
    const a = document.getElementById("demo");
    a.innerHTML="I change this paragraph";
    a.style.border="1px solid blue";
    a.style.width="fit-content";
}

const b = document.getElementById("over");
b.style.backgroundColor="yellow";
b.style.width="200px";
b.style.padding="15px"; 
b.style.textAlign="center"

function mOver() {
    b.style.backgroundColor="lightgreen";
    b.style.fontWeight="bold";
}
function mOut() {
    b.style.backgroundColor="yellow";
    b.style.fontWeight="inherit";
}
function mDown() {
    b.style.color="red";
    b.style.backgroundColor="lightblue";
}
function mUp() {
    b.style.color="black";
    b.style.backgroundColor="yellow";
}
const c = document.getElementsByClassName("container");
function double(){
    c[0].style.backgroundColor="black";
};
c[0].addEventListener("dblclick",double);

function func() {
    text.style.backgroundColor="lightblue";
    text.style.width="fit-content";
    js.style.display="none";
}