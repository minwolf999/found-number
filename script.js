const genererNombreAleatoire = () => {
    //générer un nombre entre 1 et 100
    const nombreDecimal = (Math.random()*100) + 1;
    const nombre = Math.trunc(nombreDecimal);

    //renvoyer le nombre
    return nombre
}

let nombreTentative = 1;
let nombreBas = 1;
let nombreHaut = 100;
const nombreATrouver = genererNombreAleatoire();

console.log(nombreATrouver);

const ajouterDiv = texte => {
    const divText = document.createElement('div');
    divText.textContent = texte;

    const div = document.getElementById('d2');
    div.insertBefore(divText, div.firstChild);
}

const proposerNombre = () => {
    //récupérer les données du champ
    const input = document.getElementById('rep');
    const valeur = input.value;

    //vérifier que la valeur n'est pas vide
    if (valeur === ''){
        //si elle est vide ne rien faire
        return
    }

    //transformer la valeur text en nombre
    const nombre = parseInt(valeur, 10);
    
    ajouterDiv('Tentative ' + nombreTentative);

    //comparer le nombre avec le nombre a trouver
    //le nombre est égal au nombre à trouver
    if (nombre === nombreATrouver){
        ajouterDiv('Bravo !');

        const elementCentre = document.getElementById('centre');
        elementCentre.textContent = nombre;
    }else{
         //le nombre est faux
        //si le nombre est plus grand
        if (nombre < nombreATrouver){
            ajouterDiv('C\'est plus !');

            //si le nombre est supérieur au plus bas déjà trouvé
            if (nombre > nombreBas){
                const elementbas = document.getElementById('bas');
                elementbas.textContent = nombre;

                nombreBas = nombre;
            }
        }else{
            ajouterDiv('C\'est moins !');

            //si le nombre est inférieur au plus haut déjà trouvé
            if (nombre < nombreHaut){
                const elementhaut = document.getElementById('haut');
                elementhaut.textContent = nombre;

                nombreHaut = nombre;
            }
        }
        nombreTentative += 1;
    }   
}

//récupérer le bouton
//Lorsu'il y a un clic effectue une proposition de nombre
const button = document.getElementById("but");
button.addEventListener('click', proposerNombre);