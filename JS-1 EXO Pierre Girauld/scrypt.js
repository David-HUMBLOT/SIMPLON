

// Pierre est ici l'objet littéral

let pierre = {
    nom: ['Pierre', 'Giraud'],
    age: 29,
    mail: 'pierre.Giraud@edhec.com',

    bonjour: function () {
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans.');
    }
};


document.getElementById('p1').innerHTML='Nom :' + pierre.nom;
document.getElementById('p2').innerHTML='Age :' +pierre.age;

pierre.age = 30;

document.getElementById('p3').innerHTML='Nouvel age:' + pierre.age;

pierre.taille = 170;

pierre.prez= function(){

    alert('BONJOUR. JE SUIS ' + this.nom[0] + ',JE MESURE ' + pierre.age  + 'ET J\'AI ' + this.taille + 'cm' );
}

/*pierre.prez();*/
doccument.getElementById('p1').innerHTML ='Nom complet : ' + pierre['nom'];
document.getElementById('p2').innerHTML = 'Prénom : '  + pierre['nom'][0];
document.getElementById('p3').innerHTML = 'Age : ' + pierre['age'][0];  


//Création d'objet avec les constructeur dynamique d'objet
//exemple un objet se creer par utilisateur. au lieu de recreer d autre
//objet pour les autres utilisateur, on peut utiliser une finction constructeur qui le fera de facon plus rapide au lieu de tout re ecrire.

function Utilisateure(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = mail;
    this.bonjour = function(){
alert('Bonjour je suis : ' + this.nom[0] + 'j\ai : ' + this.age + 'ans' );

    }
}
//une fonction constructeur se fait avec une majuscule pour bien
//différencier des fonctions classique qui eux seront en minuscule.
// Servira à bien les dicerner plus tard dans le code.
//Ensuite pour utiliser cette fonction constructeur et l'utiliser on utilise new

let pierre = new Utilisateure(['Pierre', 'Giraud'], [29], ['pierre.giraud@zln.com'])

pierre.bonjour();

document.getElementById('p1').innerHTML = 'NOM COMPLET : ' + pierre['nom'];
document.getElementById('p2').innerHTML = 'PRéNOM : ' + pierre['nom'][0];
document.getElementById('p3').innerHTML = 'AGE : ' + pierre['age'];

this.bonjour = function(){
    alert('BONJOURNO, JE S\'APELLE :' + this.nom[0] + ',j\'ai ' + this.age + 'ans');
}



