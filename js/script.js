console.log("Greetings! You must be crazy to come here :P");

const blockadeButtonElement = document.querySelector(".js-blockadeButton");
const blockadeSpamElement = document.querySelector(".js-blockadeSpam");
const blockadeResponse = document.querySelector(".js-blockadeResponse");

const blockadeEditable = document.getElementById("idBlockadeButton");
const naviElement = document.getElementById("navi");

blockadeButtonElement.addEventListener("click", () => {
    if (blockadeEditable.value === "") {
        blockadeResponse.innerText = "Napisz co o tym myślisz: - ale napisz coś! Nie bądź cham >:("

    } else {
        blockadeButtonElement.innerText = "Zostałeś zablokowany za posiadanie opini niezgodnej z linią mojej filozofii."
        blockadeResponse.innerText = "Jak śmiesz mieć opinię! Nie ma znaczenia, co o tym myślisz!"
        blockadeSpamElement.classList.add("specialFunction__blockade");
        naviElement.style.display = "none"

        const textElement = "Zablokowano";
        const multiplierX = textElement.repeat(3);
        const multiplierY = `${multiplierX}<br>`
        const IImultiplier = multiplierY.repeat(30);

        blockadeSpamElement.innerHTML = IImultiplier

        document.body.scrollTop = 0; // INFO: scroll for Safari
        document.documentElement.scrollTop = 0; //INFO: scroll for rest
    }
});

const hellbuttonElement = document.querySelector(".js-hellButton");
const basicStyleElement = document.querySelector(".container__bodyStyle");
const miniPortrait = document.querySelector(".section__miniImage")

const portrait = document.getElementById("portrait");
const mainHeader = document.getElementById("mainHeader");

const container = document.body;

hellbuttonElement.addEventListener("click", () => {
    blockadeResponse.innerText = "Ta wersja strony powstała przy współudziale 💧︎⌘︎♋︎⧫︎♋︎■︎♋︎. Witaj w piekle!";
    hellbuttonElement.innerText = "Zostałeś zesłany do Tartaru za tworzenie stron rodem z 2010.";

    portrait.style.border = "0"
    miniPortrait.style.border = "0"
    mainHeader.style.border = "0"
    naviElement.style.display = "none"

    blockadeEditable.style.backgroundColor = "#9a0b0b";
    blockadeResponse.style.fontFamily = "Roboto Condensed";
    hellbuttonElement.style.fontFamily = "Roboto Condensed";

    blockadeButtonElement.classList.add("specialFunction__hell");
    basicStyleElement.classList.add("specialFunction__hell");
    container.classList.add("container__body--hell");

    portrait.src = "//i.postimg.cc/ydz9xG8s/Devil2E.jpg";
    miniPortrait.src = "https://i.postimg.cc/Fzv1KR29/hell-mason.jpg";

    document.body.scrollTop = 0; //INFO: scroll for Safari
    document.documentElement.scrollTop = 0; //INFO: scroll for rest
});