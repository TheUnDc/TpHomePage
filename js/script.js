{
    const greetings = () => {
        console.log("Greetings! You must be crazy to come here :P");
    };

    const blockadeButtonElement = document.querySelector(".js-blockadeButton");
    const blockadeResponse = document.querySelector(".js-blockadeResponse");
    const blockadeEditable = document.getElementById("idBlockadeButton");
    const naviElement = document.getElementById("navi");

    const blockadeSpammer = () => {
        if (blockadeEditable.value === "") {
            blockadeResponse.innerText = "Napisz co o tym myślisz: - ale napisz coś! Nie bądź cham >:("

        } else {
            const blockadeSpamElement = document.querySelector(".js-blockadeSpam");

            blockadeButtonElement.innerText = "Zostałeś zablokowany za posiadanie opini niezgodnej z linią mojej filozofii. Wciśnij by się rozgrzeszyć!"
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

            blockadeButtonElement.removeEventListener("click", blockadeSpammer);
            hellbuttonElement.removeEventListener("click", hell);
            blockadeButtonElement.addEventListener("click", absolution);
            hellbuttonElement.addEventListener("click", absolution);
        }
    };

    const hellbuttonElement = document.querySelector(".js-hellButton");
    
    const hell = () => {
        blockadeResponse.innerText = "Ta wersja strony powstała przy współudziale 💧︎⌘︎♋︎⧫︎♋︎■︎♋︎. Witaj w piekle!";
        hellbuttonElement.innerText = "Zostałeś zesłany do Tartaru za tworzenie stron rodem z 2010. Wciśnij by się rozgrzeszyć!";

        const miniPortrait = document.querySelector(".section__miniImage");
        const portrait = document.getElementById("portrait");
        const mainHeader = document.getElementById("mainHeader");

        portrait.style.border = "0"
        miniPortrait.style.border = "0"
        mainHeader.style.border = "0"
        naviElement.style.display = "none"

        blockadeEditable.style.backgroundColor = "#9a0b0b";
        blockadeResponse.style.fontFamily = "Roboto Condensed";
        hellbuttonElement.style.fontFamily = "Roboto Condensed";

        const containerElement = document.querySelector(".container__bodyStyle");
        const body = document.body;

        blockadeButtonElement.classList.add("specialFunction__hell");
        containerElement.classList.add("specialFunction__hell");
        body.classList.add("container__body--hell");

        portrait.src = "../images/Devil2.jpg";
        miniPortrait.src = "../images/hell_mason.jpg";

        document.body.scrollTop = 0; //INFO: scroll for Safari
        document.documentElement.scrollTop = 0; //INFO: scroll for rest

        blockadeButtonElement.removeEventListener("click", blockadeSpammer);
        hellbuttonElement.removeEventListener("click", hell);
        blockadeButtonElement.addEventListener("click", absolutionReload);
        hellbuttonElement.addEventListener("click", absolutionReload);
    }

    const absolutionReload = () => {
        location.reload(true)
    }

    greetings()
    blockadeButtonElement.addEventListener("click", blockadeSpammer);
    hellbuttonElement.addEventListener("click", hell);
}