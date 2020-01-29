var tabEntrees = {
    Choisir: { image: "images/default.jpeg" },
    Escargot: { prix: 9.95, image: "images/escargot.jpg" },
    Salade: { prix: 12.95, image: "images/salade.jpg" }
};
var tabRepas = {
    Choisir: { image: "images/repas.jpeg" },
    Spaghetti: { prix: 8.95, image: "images/spaghetti.jpeg" },
    Lasagne: { prix: 9.95, image: "images/lasagne.jpeg" }
};

var list = document.getElementById("entrees");
var image = document.getElementById("image_entree");
var prix = document.getElementById("prix_entree");
var list1 = document.getElementById("repas");
var image1 = document.getElementById("image_repas");
var prix1 = document.getElementById("prix_repas");
var alert = document.getElementById("alert");
var sTotal = document.getElementById("prx1");
var tx = document.getElementById("prx2");
var gTotal = document.getElementById("prx3");

//Appliquer un style à l'élément qui sert à afficher le prix
prix.style.float = "right";
prix.style.fontSize = "1.5rem";
prix.innerText = "0.00 $";
prix1.style.float = "right";
prix1.style.fontSize = "1.5rem";
prix1.innerText = "0.00 $";

function fillList(tab, nomListe) {
    var index;
    for (index in tab) {
        nomListe.options[nomListe.length] = new Option(index);
    }
}
/*Lorsqu'un élément est sélectionné dans la liste, l'image et le prix de l'élément en question
sera affiché dans la balise appropriée*/
function displayVal(tableau, liste, image, prix) {
    var selected = liste.options[liste.selectedIndex].value;

    if (selected) {
        var sous_total, taxes, grandTotal;
        image.src = tableau[selected].image;
        prix.innerText = tableau[selected].prix + " $ ";
        prx = parseFloat(document.getElementById("prix_entree").innerText);
        prx1 = parseFloat(document.getElementById("prix_repas").innerText);
        sous_total = prx + prx1;
        taxes = sous_total * 1.14975 - sous_total;
        sTotal.innerHTML = "Sous-Total : " + sous_total.toFixed(2) + " $";
        sTotal.style.fontSize = "1.2rem";
        tx.innerHTML = " Taxes : " + taxes.toFixed(2) + " $";
        tx.style.fontSize = "1.2rem";
        grandTotal = sous_total + taxes;
        gTotal.innerHTML = " Total : " + grandTotal.toFixed(2) + " $";
        gTotal.style.fontSize = "1.6rem";
        gTotal.style.fontWeight = "bold";

        /*Une alerte s'affiche, au bas de la page, seulement si un repas est sélectionné  et affiche 
        le prix du repas, les taxes et le total */
        if (sous_total) {
            alert.style.display = "block";

            // Les valeurs par défaut qui s'affichent avec l'option par défaut de la liste déroulante "Choisir"
        } else if (selected == "Choisir") {
            var list = document.getElementById("entrees");
            var list1 = document.getElementById("repas");
            var image = document.getElementById("image_entree");
            var image1 = document.getElementById("image_repas");
            var prix_entree = document.getElementById("prix_entree");
            var prix_repas = document.getElementById("prix_repas");
            list.selectedIndex = 0;
            list1.selectedIndex = 0;
            image.src = "images/default.png";
            image1.src = "images/repas.jpeg";
            prix_entree.innerText = "0.00 $";
            prix_repas.innerText = "0.00 $";
            sTotal.innerHTML = "Sous-Total : 0.00 $";
            tx.innerHTML = " Taxes : 0.00 $";
            gTotal.innerHTML = " Total : 0.00 $";
            alert.style.display = "none";
        }
    }
}

window.onload = fillList(tabEntrees, list);
window.onload = fillList(tabRepas, list1);
