// scripts
let paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

let title = document.getElementById("page-title");
title.innerText = "Harry Pottter"; // innerHTML ou textContent (esse retorna tudo do DOM dentro do elemento)

let secondParagraph = document.getElementById("second-paragraph");
secondParagraph.style.textDecoration = "underline";
secondParagraph.style.color = "rgb(117, 117, 217)";
secondParagraph.style.fontWeight = "700";

let secondTitle = document.getElementById("subtitle");
secondTitle.style.color = "rgb(170, 150, 20)";

let paragrafos = document.getElementsByClassName("button");
paragrafos[0].style.color = "purple";

let subtitle = document.getElementsByTagName("h4");
subtitle[0].style.color = "red";
