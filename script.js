const username = document.getElementById("user");
const input = document.getElementById("name");
const input2 = document.getElementById("input2")
const profile = document.getElementById("profile");
const newdiv = document.getElementsByClassName("container")[0];

function setName(){
    username.textContent = input.value + "'s Phone Book";
    input.value = "";
}
function setImg(){
    profile.style.backgroundImage = "url(" + input2.value +")"
    console.log(input2.value)
    input2.value = "";
}
function addParagraph(){
    const newpara = document.createElement("p")
    newpara.textContent = "new paragraph";
    newdiv.appendChild(newpara);
}