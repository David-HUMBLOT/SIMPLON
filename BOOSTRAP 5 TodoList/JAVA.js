// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//declaration variable et propriété pour barré list tache sur clik

var a = document.getElementsByClassName('box');
var i;
for (i = 0; i < a.length; i++) {
  a[i].onclick = function () {
    var cible = this.parentElement;
    cible.classList.toggle('checked');
  }
}



//declaration var et prop pour ajout etoile sur clik








// Create a new list item when clicking on the "Add" button

//utiliser le push pour stocker val sur tab et sur html. push sera dans le new element







function newElement() {






  var li = document.createElement("li");

  li.className = "barre"; //creation barre pour chaque nouvelle tache 

  var star = document.createElement("i");
  star.className = "fas fa-star etoile";
 

  var boite = document.createElement("span");

  var box1 = document.createElement("input");
  box1.setAttribute("type", "checkbox");
  box1.className = 'box';



  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(box1);
  boite.appendChild(star);
  li.appendChild(boite);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  for (i = 0; i < a.length; i++) {   //ajout parametre qui aplik              prop         sur chaq ligne
    a[i].onclick = function () {
      var cible = this.parentElement;
      cible.classList.toggle('checked');
    }


    
  }

  
  for (i = 0; i < u.length; i++) {
    u[i].onclick = function () {
      var teste = this
      teste.classList.toggle('etoil3');
    }

  }



}



//fonction pour associer le clik bouton au changement de couleur d'etoile par rapport à sa positoon sur le clique de une tache.
  var u = document.getElementsByClassName("etoile");

  var i;

  for (i = 0; i < u.length; i++) {
    u[i].onclick = function () {
      var teste = this
      teste.classList.toggle('etoil3');
    }
  }







/* tentative paginsation uniquemengt avec liste
src web:https://codepen.io/javve/pen/bBfgD */




























/*
function priorité() {
  console.log('tu a cliqué ici');

  if (id = etoile) {
    document.getElementById("etoile").id = "etoile2";

  }
  else {
    document.getElementById("etoile2").id = "etoile";
  }
}
*/
