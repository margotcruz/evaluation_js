var jeune = 0;
var moyen = 0;
var vieux = 0;

var agePersonne = 0;

do {
   agePersonne = parseInt(window.prompt("Entrez l'age"));  
   
   if (agePersonne <20){
       jeune++;
       console.log(jeune);
    }
    else if ((agePersonne >= 20) && (agePersonne <= 40)){
      moyen++;
      console.log(moyen);
    }
    else if ((agePersonne >=40) && (agePersonne >=100)){
       vieux++;
       console.log(vieux);
    }

} while (agePersonne<100); 
    

        
    window.alert("Il y a "+jeune+" jeune."+"\n"+
            "Il y a "+moyen+" adulte."+"\n"+
            "Il y a "+vieux+" vieux.");