const tabCases = document.querySelectorAll(".case");
const tabContenu = document.querySelectorAll(".contenu");
const tabNthChildCases = document.querySelectorAll(".case:nth-child(n)");

/*****************************************************************************/

function cacherAutresContenus(nomContenu){
    tabContenu.forEach((contenuT) => {
        if(!contenuT.className.includes(nomContenu) && !contenuT.className.includes("cache")){
            contenuT.classList.add("cache");
        }
    });
}

function fermerAutresCases(nomContenu){
    
    tabCases.forEach((caseT) => {
        if(!caseT.className.includes(nomContenu) && !caseT.className.includes("case--fermee")){
            caseT.classList.add("case--fermee");
        }
    });
}

function ouvrirCase(nomContenu){
    tabCases.forEach((caseT) => {
        if(caseT.className.includes(nomContenu) && caseT.className.includes("case--fermee")){
            caseT.classList.remove("case--fermee");
            fermerAutresCases(nomContenu);
        }else if(caseT.className.includes(nomContenu) && !caseT.className.includes("case--fermee")){
            caseT.classList.add("case--fermee");
            replacerLaCase(nomContenu);
        }
    });
}

function afficherContenu(nomContenu){
    tabContenu.forEach((contenuT) => {
        if(contenuT.className.includes(nomContenu) && contenuT.className.includes("cache")){
            contenuT.classList.remove("cache");
            cacherAutresContenus(nomContenu)
        }else if(contenuT.className.includes(nomContenu) && !contenuT.className.includes("cache")){
            contenuT.classList.add("cache");
        }
    });
}

function deplacerCase(nomContenu){
    let i = 2;

    tabCases.forEach((caseT) => {
        if(caseT.className.includes(nomContenu)){
            caseT.style.order = 1;
        }else{
            caseT.style.order = i;
            i += 1;
        }
    });
}

function replacerLaCase(){
    tabCases.forEach((caseT) => {
        caseT.style.order = "";
    });
}

function revelerContenu(nomContenu){
    deplacerCase(nomContenu);
    ouvrirCase(nomContenu);
    afficherContenu(nomContenu);
}

/*****************************************************************************/

tabCases.forEach((caseT) => {
    caseT.addEventListener("click", () => {

        let premClasse = caseT.className.split(" ");

        switch(premClasse[0]){
            case "contact" :
                revelerContenu("contact");
                break;
            case "competences" :
                revelerContenu("competences");
                break;
            case "formations" :
                revelerContenu("formations");
                break;
            case "experiences" :
                revelerContenu("experiences");
                break;
            case "loisirs" :
                revelerContenu("loisirs");
                break;
        };
    });
});