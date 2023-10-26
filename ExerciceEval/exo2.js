function TableMultiplication(nombre){
    var M = 0;
    document.write("Table de multiplication : "+nombre+"<br>");
    for (M=1; M<=10; M++){
        result= M*nombre;
        console.log(nombre+ " x " +M+ " = "+result);
        
        document.write(nombre+ " x " +M+ " = "+result+"<br>");
    }
}
   
nombre = parseInt(window.prompt("Entrez la table de multiplication rechercher"));
    TableMultiplication(nombre);
    

    