fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/plombier-a-velo.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {

//   welcom  
      let h1 = document.createElement("h1");
      h1.textContent= data.nomCommercial;
      let welcom = document.getElementById("welcom");
      welcom.appendChild(h1);

      let slogan = document.createElement("p");
      slogan.textContent= data.phraseAccroche;
      slogan.className = "slogan";
      slogan.innerHTML = `  <img src="logo3.png" class="slogan-icon"> ${data.phraseAccroche}`;

      welcom.appendChild(slogan);

      let btnAction = document.createElement("a");
      btnAction.className = "btnAction"
      btnAction.textContent= data.texteAppelAction;

      btnAction.innerHTML = `  <img src="intervent.png" class="btnAction-icon"> ${data.texteAppelAction}`;

      welcom.appendChild(btnAction);

      let avantages = document.getElementById ("avantages");

      data.avantagesClients.forEach(element => {
        let li = document.createElement ("li");
        li.textContent= element;
        // li.className=
        avantages.appendChild(li); 
    });


// Section 2 - Serviss 
    let services = document.getElementById ("servisss");
    // création de h2    
    let h2 = document.createElement("h2");
    h2.textContent ="Nos services";
    services.appendChild(h2);
    
    let cartesSection = document.createElement("cartesCont");
    servisss.appendChild (cartesSection);
    cartesSection.className = "cartesCont";
    
    data.services.forEach(element => {

        let diva = document.createElement ("div");
        diva.className="cartes";
        cartesSection.appendChild(diva);

        let nomservice = document.createElement ("h3");
        nomservice.textContent = element.nom;
        diva.appendChild(nomservice);
    
        
        let description = document.createElement ("p");
        description.className="descript";
        description.textContent = element.description;
        diva.appendChild(description);


        let img = document.createElement ("img");
        diva.appendChild(img);
        img.src=element["image-url"];
        img.className= "picture";
       
    });
    
// section trois "Temoignages"
let temoin = document.getElementById("temoinnn");


let h3 = document.createElement("h2");
h3.textContent = "Témoignages de nos clients";
temoin.appendChild(h3);

// + section conteneur
let temoinSection = document.createElement("div");
temoinSection.className = "temoinCont";
temoin.appendChild(temoinSection);

// Boucle sur les témoignages
data.temoignages.forEach((element, index) => {
    
    let temoinItem = document.createElement("div");
    temoinItem.className = "temoinItem";

    // avatar et prénom
    let avatarAndName = document.createElement("div");
    avatarAndName.className = "avatarAndName";
    avatarAndName.innerHTML = `
        <img src="avatar${index + 1}.png" alt="Avatar de ${element.prenom}" class="avatar">
        <h4 class="prenomClient">${element.prenom}</h4>
    `;
    temoinItem.appendChild(avatarAndName);

    
    let intervention = document.createElement("h5");
    intervention.className = "intervention";
    intervention.textContent = element.typeIntervention;
    temoinItem.appendChild(intervention);

    
    let commentaire = document.createElement("p");
    commentaire.className = "commentaireClient";
    commentaire.textContent = element.commentaire;
    temoinItem.appendChild(commentaire);

    let note = document.createElement("p");
    note.className = "noteClient";
    note.textContent = `Je vous donne la note de ${element.note} sur 5`;
    temoinItem.appendChild(note);

    temoinSection.appendChild(temoinItem);
});
   
       
    })
    
    .catch(error => console.error('Error:', error));


    // carte Leaflet

 document.addEventListener("DOMContentLoaded", () => {
    var map = L.map('map').setView([45.7485, 4.8467], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([45.7485, 4.8467]).addTo(map)
        .bindPopup('Les plombiers sont ici!')
        .openPopup();
});


