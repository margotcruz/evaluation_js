
var Tab = ["Audrey", "Aurélien","Flavien","Jérémy","Laurent","Melik","Nouara","Salem","Samuel","Stephane"];{
    var saisi = window.prompt("Entrez un prenom :"+"\n"+"Audrey,Aurélien,Flavien,Jérémy,Laurent,Melik,Nouara,Salem,Samuel,Stephane.")
    var rang = Tab.indexOf(saisi);
    var nb = Tab.length;
            console.log("Le tableau contient "+nb+" éléments");

        if (rang>=0)
            {
            var sup = Tab.splice(rang,1);
            console.log("rang"+sup)
            console.log(Tab)
            var nb = Tab.push("")
 
            console.log(sup);

             }
         else {
    alert ("Mauvais prénom");
 
}
}