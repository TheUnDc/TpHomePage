{
    const doLogGreetings = () => {
        console.log("Greetings! You must be crazy to come here :P");
    };

    const responseSpecialFunction = document.querySelector(".js-specialFunctionResponse");
    const blockadeEditable = document.getElementById("idBlockadeButton");
    const blockadeButtonElement = document.querySelector(".js-blockadeButton");
    const hellbuttonElement = document.querySelector(".js-hellButton");

    const init = () => {
        doLogGreetings()
        blockadeButtonElement.addEventListener("click", doBlockadeSpecialFunction);
        hellbuttonElement.addEventListener("click", doHellSpecialFunction);
    };
    

    const scrollToTheTop = () => {
        document.body.scrollTop = 0; // INFO: scroll for Safari
        document.documentElement.scrollTop = 0; //INFO: scroll for rest
    };

    const reloadAndScroll = () => {
        scrollToTheTop();
        location.reload(true);
    };

    const replaceListenerToRefresh = () => {
        blockadeButtonElement.removeEventListener("click", doBlockadeSpecialFunction);
        hellbuttonElement.removeEventListener("click", doHellSpecialFunction);
        blockadeButtonElement.addEventListener("click", reloadAndScroll);
        hellbuttonElement.addEventListener("click", reloadAndScroll);
    };

    const doBlockadeSpecialFunction = () => {

        if (blockadeEditable.value === "") {
            responseSpecialFunction.innerText = "🤔Napisz co o tym myślisz: - ale napisz coś! Nie bądź cham >:(";

        } else {
            modifyBlockadeContents();
            spamBlockadeText();
            scrollToTheTop();
            replaceListenerToRefresh();
        }
    };

    const spamBlockadeText = () => {
        const blockadeSpamElement = document.querySelector(".js-blockadeSpam");
        const textElement = "Zablokowano";
        const multiplierX = textElement.repeat(3);
        const multiplierY = `${multiplierX}<br>`;
        const IImultiplier = multiplierY.repeat(30);
        blockadeSpamElement.innerHTML = IImultiplier;
    };

    const modifyBlockadeContents = () => {
        const blockadeSpamElement = document.querySelector(".js-blockadeSpam");
        const naviElement = document.getElementById("navi");
        
        blockadeButtonElement.innerText = "❗Zostałeś zablokowany za posiadanie opini niezgodnej z linią mojej filozofii.❗ 👉Wciśnij by się rozgrzeszyć!👈";
        responseSpecialFunction.innerText = "❗Jak śmiesz mieć opinię!❗ ❗Nie ma znaczenia, co o tym myślisz!❗";
        blockadeSpamElement.classList.add("specialFunction__blockade");
        naviElement.style.display = "none";
    };

    const doHellSpecialFunction = () => {

        modifyHellContents();
        modifyHellStyles();
        scrollToTheTop();
        replaceListenerToRefresh();
    }

    const modifyHellStyles = () => {
        const containerElement = document.querySelector(".container__bodyStyle");
        const body = document.body;
        
        blockadeButtonElement.classList.add("specialFunction__hell");
        containerElement.classList.add("specialFunction__hell");
        body.classList.add("container__body--hell");
        blockadeEditable.style.backgroundColor = "#9a0b0b";
        responseSpecialFunction.style.fontFamily = "Roboto Condensed";
        hellbuttonElement.style.fontFamily = "Roboto Condensed";
    };

    const modifyHellContents = () => {
        const miniPortrait = document.querySelector(".section__miniImage");
        const portrait = document.getElementById("portrait");
        const naviElement = document.getElementById("navi");

        responseSpecialFunction.innerText = "😈Ta wersja strony powstała przy współudziale 💧︎⌘︎♋︎⧫︎♋︎■︎♋︎.😈 😈Witaj w piekle!😈";
        hellbuttonElement.innerText = "💔Zostałeś zesłany do Tartaru za tworzenie stron rodem z 2010.💔 👉Wciśnij by się rozgrzeszyć!👈";
        portrait.src = "../images/Devil2.jpg";
        miniPortrait.src = "../images/hell_mason.jpg";
        naviElement.style.display = "none";
    };

    init();
}