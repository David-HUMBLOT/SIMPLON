

// /* ecouteur d'événement*/

document.getElementById("FORMULAIRE").addEventListener("submit",function(){
    alert('Formulaire envoyé ! ')
});

 function validationformulaire()                                    
 { 

    /**recuperation des données formulaires** */
     var firstname = document.forms["RegForm"]["Nom"];               
     var lastname = document.forms["RegForm"]["Email"];    
     var company = document.forms[""][""];  
     var email =  document.forms[""][""];  
     var areacode = document.forms["RegForm"]["Mot de passe"];  
     var phone = document.forms["RegForm"]["Adresse"];  
     var subject = document.forms["RegForm"]["Commentaire"]; 

      /*  validation donnée formulaire* */

      if (name.value == "")                                  
      { 
          alert("Mettez votre nom."); 
          name.focus(); 
          return false; 
      }    
      if (address.value == "")                               
      { 
          alert("Mettez votre adresse."); 
          address.focus(); 
          return false; 
      }        
      if (email.value == "")                                   
      { 
          alert("Mettez une adresse email valide."); 
          email.focus(); 
          return false; 
      }    
      if (email.value.indexOf("@", 0) < 0)                 
      { 
         alert("Mettez une adresse email valide."); 
          email.focus(); 
          return false; 
      }    
      if (email.value.indexOf(".", 0) < 0)                 
      { 
          alert("Mettez une adresse email valide."); 
          email.focus(); 
          return false; 
      }    
      if (phone.value == "")                           
      { 
          alert("Mettez votre numéro de téléphone."); 
          phone.focus(); 
          return false; 
      }    
      if (password.value == "")                        
      { 
          alert("Saisissez votre mot de passe"); 
          password.focus(); 
          return false; 
      }    
      if (what.selectedIndex < 1)                  
      { 
          alert("Mettez votre cours."); 
          what.focus(); 
          return false; 
      } 
      if (comment.value == "")                  
      { 
         alert("Écrivez un commentaire."); 
         comment.focus(); 
         return false; 
      } 
      return true; 
  }
 
    /**test tableau information */
  clientInformation = new Array(7);
  clientInformation[0] = "Dimanche"
  clientInformation[1] = "Lundi"
  clientInformation[2] = "Mardi"
  clientInformation[3] = "Mercredi"
  clientInformation[4] = "Jeudi"
  clientInformation[5] = "Vendredi"
  clientInformation[6] = "Samedi"

  console.log(clientInformation);

  